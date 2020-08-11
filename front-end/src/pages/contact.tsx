import React, { useState } from "react";

import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Form, Field } from "react-final-form";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      "& label.Mui-focused": {
        color: "purple",
        border: "purple",
      },
    },
    paragraphs: {
      padding: "5px",
      margin: "5px",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: "5px",
      backgroundColor: "#323e45",
    },
    formPaperStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#cad9db",
      padding: "20px",
      marginBottom: "50px",
    },
    form: {
      padding: "10px",
      display: "flex",
      flexDirection: "row",
    },
    formDiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    formBox: {
      width: "50%",
    },
    formSubmit: {
      float: "right",
      marginTop: "20px",
      marginRight: "5px",
    },
    formLabel: {
      float: "left",
      color: "black",
      margin: "5px",
    },
    formInputs: {
      width: "95%",
      border: "1px",
      borderRadius: "5px",
      padding: "10px",
    },
    emailContent: {
      float: "left",
      resize: "none",
      width: "95%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px",
    },
    submitButton: {
      backgroundColor: "red",
      color: "white",
      "&:hover": {
        backgroundColor: "red",
      },
    },
  });

type ContactProps = {} & WithStyles<typeof styles>;

const ContactUnstyled: React.FC<ContactProps> = ({ classes }) => {
  const [emailSuccess, setEmailSuccess] = useState();

  const onSubmit = (values: any) => {
    try {
      fetch("/send", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setEmailSuccess(data.text);
          console.log("Ping response->", data.text);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.root}>
      <Box p={3}>
        <Typography color="primary" variant="h2">
          Let's Stay In Contact!!!
        </Typography>
      </Box>
      {emailSuccess && <Box p={3}>{emailSuccess}</Box>}
      <div className={classes.formDiv}>
        <Paper className={classes.formPaperStyle}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Field name="userFirstName">
                  {({ input, meta }) => (
                    <div>
                      <label className={classes.formLabel}>First Name:</label>
                      <input
                        {...input}
                        type="text"
                        className={classes.formInputs}
                        placeholder="Please enter your first name here..."
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="userLastName">
                  {({ input, meta }) => (
                    <div>
                      <label className={classes.formLabel}>Last Name:</label>
                      <input
                        {...input}
                        type="text"
                        className={classes.formInputs}
                        placeholder="Please enter your last name here..."
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="userEmail">
                  {({ input, meta }) => (
                    <div>
                      <label className={classes.formLabel}>
                        Email-address:
                      </label>
                      <input
                        {...input}
                        type="email"
                        className={classes.formInputs}
                        placeholder="Please enter your email e.g. your@email.com"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="emailSubject">
                  {({ input, meta }) => (
                    <div>
                      <label className={classes.formLabel}>Subject:</label>
                      <textarea
                        {...input}
                        className={classes.emailContent}
                        rows={2}
                        maxLength={100}
                        placeholder="Please enter your Subject e.g. What do you want to talk about?"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="emailContent">
                  {({ input, meta }) => (
                    <div>
                      <label className={classes.formLabel}>
                        Please tell me what you think of my profile:
                      </label>
                      <textarea
                        {...input}
                        maxLength={250}
                        rows={6}
                        className={classes.emailContent}
                        placeholder="Please enter your Content e.g. Your email!"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <div className={classes.formSubmit}>
                  <Button className={classes.submitButton} type="submit">
                    send!
                  </Button>
                </div>
              </form>
            )}
          />
        </Paper>
      </div>
    </div>
  );
};

export default withStyles(styles)(ContactUnstyled);
