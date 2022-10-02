import React, { useState, useEffect } from "react";
// import { getEthnic} from './EthnicService';
import { Formik, Field,Form, ErrorMessage } from 'formik';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import * as Yup from 'yup';
function Edit(props) {
  const [form, setValues] = useState({
    id:null,
    name:"",
    username:"",
    password:"",
    email:"",
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitFormAdd = (e) => {
    console.log(form);
    //e.preventDefault();
    // props.addItemToState(form);
    // props.toggle();
  };

  const submitFormEdit = (e) => {
    //e.preventDefault();
    // props.updateState(form);
    // props.toggle();
  };
  console.log('log',form)

  const validationSchema=Yup.object({
    name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Name is required'),
    username: Yup.string()
    .required('Username is required'),
    password: Yup.string()
    .required('Password is required'),
    email: Yup.string()
    .required('Email is required'),
    })
    

//     async function getEthnics(itemId) {
//       let response = await getEthnic(itemId);
//       if (response.data) {
//         console.log('getId',response.data)
//         setValues(response.data)
//       } else {
//       }
//     } 

//   useEffect(() => {
//     if (props.item) {
//       getEthnics(props.item.id)

//     }
//   }, [props.item]);
      return (
        <Formik
                initialValues={form}
                validationSchema={validationSchema}
                enableReinitialize
                onChange={onChange}
                onSubmit={props.item ? submitFormEdit : submitFormAdd}
                
                >{({ errors, status, touched }) => (
                  <Form>
                     <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} value={form.name=== null ? "" :form.name} onChange={onChange}/>
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} value={form.username=== null ? "" :form.username} onChange={onChange}/>
                          <ErrorMessage name="username" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} value={form.password=== null ? "" :form.password} onChange={onChange}/>
                          <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} value={form.email=== null ? "" :form.email} onChange={onChange}/>
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                  <div className="form-group">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className="btn btn-primary mr-2"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    type="reset"
                    variant="contained"
                    color="secondary"
                    size="large"
                    className="btn"
                    startIcon={<RotateLeftIcon/>}
                  >
                    Reset
                  </Button>
                  </div>
                </Form>
                )}
            </Formik>

      )}
    
  
  
  export default Edit