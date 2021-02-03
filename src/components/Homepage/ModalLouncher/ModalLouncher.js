import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// import { AiOutlinePlus } from "react-icons/ai";
// import { AiFillCloseCircle } from "react-icons/ai";

import "./modalLouncher.css";

// Form is automatcly handled by react-hook-form library no need for separate state for inputs
import { useForm } from "react-hook-form";

const ModalLouncher = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {props.children}

      <Modal isOpen={props.modal} toggle={props.toggleModal}>
        <ModalHeader
          className="border-0 d-flex align-item-center font-weight-bold"
          toggle={props.toggleModal}
        >
          Приклучи се
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
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
              {props.email && (
                <>
                  <div className="col-12">
                    <label htmlFor="email">{props.email}</label>
                    <span className="val-mess">
                      {errors.email && "Внесете Е-Маил"}
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Внесете Е-Маил"
                      ref={register({
                        required: true,
                        minLength: 4,
                        maxLength: 80,
                      })}
                    />
                  </div>
                </>
              )}
              {props.company && (
                <>
                  <div className="col-12">
                    <label htmlFor="company">{props.company}</label>
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
                </>
              )}
              {props.telnum && (
                <>
                  <div className="col-12">
                    <label htmlFor="telnum">{props.telnum}</label>
                    <span className="val-mess">
                      {errors.telnum && "Внесете Телефонски Број"}
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="number"
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
                </>
              )}
              {props.text && (
                <>
                  <div className="col-12">
                    <label htmlFor="corabotka">{props.text}</label>
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
                </>
              )}
            </div>
          </ModalBody>
          <ModalFooter className="border-0">
            <Button
              className="text-small"
              color="none"
              onClick={props.toggleModal}
            >
              ИСКЛУЧИ
            </Button>
            <button type="submit" className="btn-custom float-right">
              ИСПРАТИ ФОРМА
            </button>{" "}
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default ModalLouncher;

// ModalLouncher.defaultProps = {
//   telnum: "Телефонски Број (задолжително)",
// };
