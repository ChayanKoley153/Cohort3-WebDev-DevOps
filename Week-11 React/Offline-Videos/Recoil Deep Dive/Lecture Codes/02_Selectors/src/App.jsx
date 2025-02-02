import { RecoilRoot, useRecoilValue } from 'recoil'; 
import { netwrokAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './store/atom'; 
import { useMemo } from 'react'; 
import './App.css'; 

function App() {
  return (
    <RecoilRoot> 
      <div>
        <Wrapper/> 
      </div>
    </RecoilRoot>
  );
}

function Wrapper() {
  const networkAtomCount = useRecoilValue(netwrokAtom); 
  const jobsAtomCount = useRecoilValue(jobsAtom); 
  const notificationAtomCount = useRecoilValue(notificationsAtom); 
  const messagingAtomCount = useRecoilValue(messagingAtom); 

  // === APPROACH 1 ===
  // Direct summation of all atom values
  // const totalAtoms = networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;

  // === APPROACH 2 ===
  // Use useMemo for performance optimization. Memoize the result to avoid recalculating unless dependencies change.
  // const totalAtomsUsingMemo = useMemo(() => {
  //   return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
  // }, [networkAtomCount, jobsAtomCount, notificationAtomCount, messagingAtomCount]);

  // === APPROACH 3 ===
  // Use a Recoil selector to derive the total notification count
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>  
      <button>Home</button>
      <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button> 
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>

      {/* Approach 1 */}
      {/* <button>ME {totalAtoms}</button> */}
      
      {/* Approach 2 */}
      {/* <button>ME {totalAtomsUsingMemo}</button> */}

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}


export default App;
