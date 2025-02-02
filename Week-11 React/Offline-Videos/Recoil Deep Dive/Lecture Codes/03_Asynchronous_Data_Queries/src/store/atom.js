import { atom, selector } from "recoil"; 
import axios from "axios"; 

export const notifications = atom({
  key: "notifications", 
  default: { network: 0, jobs: 0, messaging: 0, notifications: 0 },
});

export const notificationsSelector = selector({
  key: "notificationsSelector", 
  get: async () => {
    try {
      const response = await axios.get("https://sum-server.100xdevs.com/notifications");
      return response.data; 
    } catch (error) {
      console.error("Error fetching notifications:", error); 
      return { network: 0, jobs: 0, messaging: 0, notifications: 0 };
    }
  },
});


export const totalNotificationSelector = selector({
  key: "totalNotificationSelector", 
  get: ({ get }) => {
    try {
      const allNotifications = get(notifications); 
      return (
        allNotifications.network +
        allNotifications.jobs +
        allNotifications.messaging +
        allNotifications.notifications
      ); 
    } catch (error) {
      console.error("Error calculating total notifications:", error); 
      return 0; 
    }
  },
});
