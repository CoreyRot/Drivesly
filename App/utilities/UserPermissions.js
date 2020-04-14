 import Contstants from "expo-constants";
 import * as Permissions from "expo-permissions";

 class UserPermssions {
     getCameraPermission = async () => {
         if (Contstants.platform.ios) {
             const { status } = await Permissions.askAsync (Permissions.CAMERA_ROLL);
             
             if (status != "granted") {
                 alert("We need permissions to use your camera roll");
             }
         }
     };
 }

 export default new UserPermssions();