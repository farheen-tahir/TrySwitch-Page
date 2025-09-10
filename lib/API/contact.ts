import dataServer from "../dataServer";

export const contactCode3Scribe = (payload: {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  phoneNumber: string;
}) => {
  return dataServer.post(`/Email/SendContactEmail`, payload);
};
