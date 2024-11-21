import { ref as refs, set, push } from "firebase/database";
import { Database } from "../Firebase";
export async function itemcheckout(collection) {
    // console.log(collection, data);
    console.log(collection);
    const dbRef = push(refs(Database, "userproduct"));
    // Push data to the database
    const date = new Date().toLocaleString();
    set(dbRef, {
      user_id: collection.user_id,
      Book_name: collection.Book_name,
      Created_at: date,
    });
    alert("data successfully uploaded");
  }