import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function FormInput() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Form>
      <FormGroup>
        <Label for="name">Име и Презиме (задолжително)</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Внесете Име и Презиме"
        />
      </FormGroup>
      <FormGroup>
        <Label for="company">Име на Компанија (незадолжително)</Label>
        <Input
          type="text"
          name="company"
          id="company"
          placeholder="Внесете име на Вашата Компанија"
        />
      </FormGroup>
      <FormGroup>
        <Label for="telnum">Телефонски Број (задолжително)</Label>
        <Input
          type="text"
          name="telnum"
          id="telnum"
          placeholder="Внесете Телефонски Број"
        />
      </FormGroup>
      <FormGroup>
        <Label for="">Предлог за Соработа (незадолжително)</Label>
        <Input
          type="textarea"
          name="sorabotka"
          id="sorabotka"
          placeholder="Во 300 карактери, опишете зошто сакате да соработуваме"
        />
      </FormGroup>
    </Form>
  );
}
export default FormInput;
