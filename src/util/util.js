
class Util {
  
  refreshPage() {
    window.location.reload(true);
  }
  findUserByUID = async (getUserById , auth , uid) => {
    try {
      const userRecord = await getUserById(auth, uid);
      // User found, userRecord contains user information
      console.log("User record:", userRecord);
      return userRecord; // Return the user record if needed
    } catch (error) {
      // User not found or error occurred
      console.error("Error fetching user:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };
}


export default Util;