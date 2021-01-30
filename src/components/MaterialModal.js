import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { AiOutlinePlus } from "react-icons/ai";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <button className="btn-custom " onClick={handleOpen}>
        <AiOutlinePlus />
        ПРИКЛУЧИ СE
      </button>
      <Grid item md={2}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title"> Приклучи се</h2>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="name">Име и Презиме (задолжително)</label>
                    <span className="val-mess">
                      {errors.name && "Внесете Име и Презиме"}
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Внесете Име и Презиме"
                      ref={register({
                        required: true,
                        minLength: 2,
                        maxLength: 80,
                      })}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="company">
                      Име на Компанија (незадолжително)
                    </label>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Внесете име на Вашата Компанија"
                      ref={register}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="telnum">
                      Телефонски Број (задолжително){" "}
                    </label>
                    <span className="val-mess">
                      {errors.telnum && "Внесете Телефонски Број"}
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="tel"
                      name="telnum"
                      id="telnum"
                      placeholder="Внесете Телефонски Број"
                      ref={register({
                        required: true,
                        minLength: 6,
                        maxLength: 16,
                      })}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="corabotka">
                      Предлог за Соработа (незадолжително)
                    </label>
                    <span className="max-text">300</span>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="sorabotka"
                      id="sorabotka"
                      rows="5"
                      placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"
                      ref={register({ maxLength: 300 })}
                    />
                  </div>
                </div>
                <Button className="text-small" onClick={handleClose}>
                  ИСКЛУЧИ
                </Button>
                <button type="submit" className="btn-custom float-right">
                  ИСПРАТИ ФОРМА
                </button>{" "}
              </form>
            </div>
          </Fade>
        </Modal>
      </Grid>
    </>
  );
}
