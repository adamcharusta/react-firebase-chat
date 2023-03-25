import { addDoc, collection, getFirestore } from 'firebase/firestore';
import firebaseApp from '../firebaseInitialize';
import { useCollection } from 'react-firebase-hooks/firestore';
import { IMessage, IMessageSendDto } from '../app.types';
import moment from 'moment/moment';
import useAuth from './useAuth';

interface IUseMessages {
  messages: IMessage[];
  sendMessage: (message: string) => Promise<void>;
  loading: boolean;
  error?: Error;
}

const useMessages = (): IUseMessages => {
  const { user } = useAuth();
  const messagesCollection = collection(getFirestore(firebaseApp), 'messages');

  const [value, loading, error] = useCollection(messagesCollection, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const sendMessage = async (message: string) => {
    if (user) {
      const { photoURL, displayName, uid } = user;
      const payload: IMessageSendDto = {
        message,
        photoURL,
        displayName,
        uid,
        createdAt: moment().toString(),
      };

      await addDoc(messagesCollection, payload).catch((err) => console.error(err));
    }
  };

  const prepareResponse = (): IMessage[] => {
    if (user && value?.docs) {
      // extracting data into a regular array
      const result: IMessage[] = value?.docs.map((doc) => {
        const data = doc.data() as IMessage;
        const { id } = doc.ref;
        const isCurrentUserMessage = data.uid === user.uid;

        return { ...data, id, isCurrentUserMessage };
      });

      // sort by createdAt
      return result.sort((a, b) => moment(a.createdAt).diff(moment(b.createdAt)));
    }
    return [];
  };

  return { messages: prepareResponse(), sendMessage, loading, error };
};

export default useMessages;
