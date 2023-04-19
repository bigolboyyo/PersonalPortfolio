export const responseHandler = (
  response,
  setSeverity,
  setResponseMsg,
  data
) => {
  if (response.status >= 200 && response.status < 300) {
    setSeverity("success");
    setResponseMsg(data.message);
  } else if (response.status >= 400 && response.status < 500) {
    setSeverity("warning");
    setResponseMsg(data.message);
  } else if (response.status >= 500) {
    setSeverity("error");
    setResponseMsg(data.message);
  }
};
