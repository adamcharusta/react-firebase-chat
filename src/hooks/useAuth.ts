import { getAuth, User } from 'firebase/auth';
import firebaseApp from '../firebaseInitialize';
import { useAuthState, useSignInWithGoogle, useSignOut } from 'react-firebase-hooks/auth';

export interface IUseAuth {
  user?: User | null;
  logIn: () => Promise<void>;
  logOut: () => Promise<void>;
}

const useAuth = (): IUseAuth => {
  const auth = getAuth(firebaseApp);
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signOut] = useSignOut(auth);

  //TODO: create method of error messaging
  const logIn = async () => {
    await signInWithGoogle().catch((err) => console.error(err));
  };

  const logOut = async () => {
    await signOut().catch((err) => console.error(err));
  };

  return { user, logIn, logOut };
};

export default useAuth;
