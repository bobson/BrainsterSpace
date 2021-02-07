import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { FiArrowRight } from "react-icons/fi";

import "./modalLouncher.css";

// Form is automatcly handled by react-hook-form library no need for separate state for inputs
import { useForm } from "react-hook-form";

const ModalLouncher = (props) => {
  const { register, watch, handleSubmit, errors } = useForm();
  const showTextLength = watch("sorabotka");
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {props.children}

      <Modal isOpen={props.modal} toggle={props.toggleModal}>
        <ModalHeader
          className="border-0 d-flex align-item-center"
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
                  {errors.name && errors.name.message}
                </span>
              </div>
              <div className="col-12 mb-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Внесете Име и Презиме"
                  ref={register({
                    required: { value: true, message: "Внесете Име и Презиме" },
                    pattern: { value: /\S+/, message: "Внесете Име и Презиме" },
                    minLength: { value: 2, message: "Минимум 2 карактери" },
                    maxLength: 80,
                  })}
                />
              </div>
              {props.email && (
                <>
                  <div className="col-12">
                    <label htmlFor="email">{props.email}</label>
                    <span className="val-mess">
                      {errors.email && errors.email.message}
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Внесете Е-Маил"
                      ref={register({
                        required: { value: true, message: "Внесете Е-Маил" },
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Внесете валиден емаил",
                        },
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
                      {errors.telnum && errors.telnum.message}
                      {errors.telnum?.type === "number" &&
                        "Внесете само броеви"}
                      {errors.telnum?.type === "minLength" &&
                        "Минумум 4 броеви"}
                      {errors.telnum?.type === "maxLength" &&
                        "Максимум 16 броеви"}
                    </span>
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      name="telnum"
                      id="telnum"
                      placeholder="Внесете Телефонски Број"
                      ref={register({
                        required: {
                          value: true,
                          message: "Внесете Телефонски Број",
                        },
                        validate: {
                          number: (value) => !isNaN(value),
                          minLength: (value) => value.length >= 4,
                          maxLength: (value) => value.length <= 16,
                        },
                      })}
                    />
                  </div>
                </>
              )}
              {props.text && (
                <>
                  <div className="col-12">
                    <label htmlFor="corabotka">{props.text}</label>
                    <span className="max-text">
                      {/* Динамички го поставува бројот на преостанатите карактери */}
                      {showTextLength ? 300 - showTextLength.length : 300}
                    </span>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="sorabotka"
                      id="sorabotka"
                      rows="5"
                      placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"
                      ref={register({
                        maxLength: 300,
                      })}
                    />
                  </div>
                </>
              )}
            </div>
          </ModalBody>
          <ModalFooter className="border-0">
            <Button
              // className="text-small"
              color="none"
              onClick={props.toggleModal}
            >
              ИСКЛУЧИ
            </Button>
            <button type="submit" className="btn-custom float-right">
              <FiArrowRight />
              ИСПРАТИ ФОРМА
            </button>{" "}
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default ModalLouncher;
