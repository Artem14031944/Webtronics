import { FC, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';
import style from './Form.module.css';

interface Iform {
  name: string;
  phone: number;
  email: string;
};

const Form: FC = () => {
  const [openModal, setOpenModal]= useState(false);
  const [disabledName, setDisabledName] = useState(false);
    
  const { 
    register, 
    handleSubmit,  
    reset,
    formState: { errors } 
  } = useForm<Iform>();

  const onSubmit: SubmitHandler<Iform> = ({name, phone, email}) => {
    // Для проверки валидности телефона пример
    // +7 (495) 965-14-82
    axios.post('http://localhost:3004/feedback', {
      "id": uuidv4(),
      "email": email,
      "name": name,
      "phone": phone
    })
    .then(() => {
      reset();
      setOpenModal(true);
    })
    .catch(err => console.log(err))
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <input 
          placeholder='Name'
          className={errors.name ? style.inputError : style.input} 
          defaultValue="" 
          type="text"
          {...register("name", {
            required: true,
            disabled: disabledName,
            minLength: {
              value: 3,
              message: 'Minimum 3 characters',
            },
            maxLength: {
              value: 20,
              message: 'Maximunm 20 characters',
            }
          })}
        />
          {errors.name && <span className={style.error}>
            {errors.name.message || 'This field is required'}
          </span>}
        <input 
          placeholder='Phone'
          className={errors.phone ? style.inputError : style.input} 
          defaultValue="" 
          {...register("phone", {
            required: true,
            pattern: {
              value: /(?:\+?)[78]+[0-9() -]{16,17}/,
              message: 'Phone number not correct: +7 (***) ***-**-**'
            }
          })}
          type="text"
        />
          {errors.phone && <span className={style.error}>
            {errors.phone.message || 'This field is required'}
          </span>}
        <input
          placeholder='E-mail'
          className={errors.email ? style.inputError : style.input} 
          defaultValue="" 
          {...register("email", {
            required: true,
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email not correct',
            }  
          })}
          type="text"/>
        {errors.email && <span className={style.error}>
          {errors.email.message || 'This field is required'}
          </span>}
        <Button 
          text='Send'
          type='submit'    
          btnStyle={style.btn}
        />
      </form>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={'Сongratulations'}
        text={'Sending data was successful!'}
      />
    </>
  )
};

export default Form;