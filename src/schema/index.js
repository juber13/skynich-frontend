import * as  Yup from 'yup';

export const signUpSchema = Yup.object({
  name: Yup.string().required("name is required"),
  lastName: Yup.string().required("lastName is required"),
  department: Yup.string().required("department is required"),
  joining: Yup.string().required("joining date is required"),
  designation: Yup.string().required("designation is required"),
  salary: Yup.string().required("Expected salry is required"),
  image: Yup.string().required("image path  is required"),
  
});

