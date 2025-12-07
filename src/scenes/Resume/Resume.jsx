// Resume.jsx
import s from "./Resume.module.scss";
import { ReactComponent as FilesIcon } from "../../assets/resume-files.svg";
import { ReactComponent as DownloadIcon } from "../../assets/download.svg";
import Gunakarna from "../../assets/Gunakarna.pdf"; // <-- default import (URL string)

import { useEffect, useRef, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import LinerProgress from "../../components/UIElements/LinerProgress/LinerProgress";
import Button from "../../components/UIElements/Button/Button";
// react-pdf
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumelink =
  "https://firebasestorage.googleapis.com/v0/b/karnaappsgk.appspot.com/o/resume%2FGunaseelan_Dev-2025.pdf?alt=media&token=ba0b40f8-4d78-401f-b36b-d88c93be2895";

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(600);

  useEffect(() => {
    const updateWidth = () =>
      setPdfPageWidth(pdfWrapper.current?.getBoundingClientRect().width ?? 600);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon width="48" height="48" />
          </div>
        </div>

        <Button
          style={{ margin: "auto", width: "15rem" }}
          className="primary"
          href={resumelink} // local asset URL
          target="_blank"
          rel="noreferrer"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={Gunakarna} // <-- pass URL string directly
            onLoadError={(e) => console.error("Document load error:", e)}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
