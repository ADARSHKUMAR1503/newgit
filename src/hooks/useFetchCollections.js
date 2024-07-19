import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useFetchCollection = (fbcollection) => {
  const [documents, setDocuments] = useState(null);
  console.log(documents);
  useEffect(() => {
    let collectionRef = collection(db, fbcollection);
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => unsub();
  }, [fbcollection]);
  return { documents };
};
