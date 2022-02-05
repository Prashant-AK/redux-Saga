import { db } from "../Firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const addFriend = async (data) => {
  try {
    const assignmentcollection = collection(db, "Assignment");
    await addDoc(assignmentcollection, data);
  } catch (err) {
    alert(err);
  }
};

export const getList = async () => {
  try {
    // console.log("getList is callled");
    const assignmentcollection = collection(db, "Assignment");
    var list = await getDocs(assignmentcollection);
    var arr = [];
    list.docs.map((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    return arr;
  } catch (error) {
    console.log(error);
  }
};
export const deleteFrd = async (id) => {
  try {
    console.log("Delete API hit", id);
    const frdDoc = doc(db, "Assignment", id);
    await deleteDoc(frdDoc);
  } catch (error) {
    console.log(error);
  }
};
