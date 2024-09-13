'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '../Fields/Input';
import styled from 'styled-components';
import {
  maskZapPhoneNumberOnBlurInput,
  maskZapPhoneNumberOnChangeInput,
} from '@/utils/masks';
import { TextArea } from '../Fields/TextArea';
import { lighten } from 'polished';
import { redirect } from 'next/navigation';

const REGEX_PHONE = /\(\d{2}\)\s\d{1}\s\d{4}-\d{4}/;

const schema = z.object({
  name: z
    .string()
    .min(3, 'Por favor, informe um nome válido')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  mail: z
    .string()
    .min(1, 'O e-mail é obrigatório!')
    .email('Informe um email válido!')
    .toLowerCase(),
  zap: z
    .string()
    .min(1, 'O Whatsapp é obrigatório!')
    .regex(REGEX_PHONE, 'Informe um número de Whatsapp válido!'),
  text: z.string().min(5, 'Envie uma mensagem'),
});

type DataProps = z.infer<typeof schema>;

const FormArea = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.light};
  padding: 50px;
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 400px;

  button {
    color: ${({ theme }) => theme.colors.light.default};
    font-family: ${({ theme }) => theme.fonts.h5.fontFamily};
    font-size: 1.7rem;
    font-weight: bolder;
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.actions.sucess};
    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.colors.actions.sucess)};
    }
  }
`;

export function FormContact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DataProps>({
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });

  function onChangeZapInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskZapPhoneNumberOnChangeInput(e.target.value);
    setValue('zap', value);
  }
  function onBlurZapInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskZapPhoneNumberOnBlurInput(e?.target.value);

    setValue('zap', value);
  }

  const sendForm: SubmitHandler<DataProps> = (data) => {
    console.log(data);
  };

  return (
    <FormArea>
      <SForm onSubmit={handleSubmit(sendForm)}>
        <Input
          {...register('name')}
          label="Nome:"
          placeholder="Digite o seu nome..."
          helperText={errors.name?.message}
        />
        <Input
          {...register('mail')}
          label="E-mail:"
          type="email"
          placeholder="Digite o seu email..."
          helperText={errors.mail?.message}
        />
        <Input
          {...register('zap', {
            onChange: onChangeZapInput,
            onBlur: onBlurZapInput,
          })}
          label="Whatsapp:"
          placeholder="Digite somente os números..."
          helperText={errors.zap?.message}
        />
        <TextArea
          {...register('text')}
          label="Mensagem:"
          placeholder="Digite a mensagem..."
          helperText={errors.text?.message}
        />
        <button type="submit">Enviar</button>
      </SForm>
    </FormArea>
  );
}
