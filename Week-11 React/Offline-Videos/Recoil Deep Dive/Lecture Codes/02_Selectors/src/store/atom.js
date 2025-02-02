import { atom, selector } from "recoil";

export const netwrokAtom = atom({
  key: "netwrokAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(netwrokAtom);
    const jobsAtomsCount = get(jobsAtom);
    const notificationAtomCount = get(notificationsAtom);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobsAtomsCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});
