import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import { collection, query, where, getDocs} from "firebase/firestore";
import { Firestore } from "../Firebase";

export default function BookDetail() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { itemId } = useParams();
  const [getdata, setdata] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    // Define async function inside useEffect to handle async/await
    const fetchBookData = async () => {
      try {
        const q = query(collection(Firestore, "Book"), where("index", "==", itemId));
        const querySnapshot = await getDocs(q);
        setdata(querySnapshot)
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchBookData();
  }, [itemId]);
  return (
    <div>
      <Document file="" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages ?? '...'}
      </p>
    </div>
  );
}