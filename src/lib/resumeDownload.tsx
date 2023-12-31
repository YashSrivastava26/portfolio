export const downloadResume = () => {
  const pdfPath = "/Yash_Srivastava_Resume.pdf";

  const link = document.createElement("a");

  link.href = pdfPath;

  link.download = "Yash_Srivastava_Resume.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
