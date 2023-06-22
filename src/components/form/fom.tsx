'use client'
import * as React from 'react';
import  Style from './form.module.css';
import { Button, Card, CardBody, CardHeader, Heading, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlineUser, AiOutlinePhone} from 'react-icons/ai';


function Form(){

    let [value, setValue] = React.useState('')

    return(
        <section className={Style.containerCard}>
            <Card className={Style.card} align='center'>
                <CardHeader>
                    <Heading size='md' textTransform='uppercase' className={Style.formTitle}>Todo lo hacemos posible, sólo contáctanos y cuéntanos sobre tu proyecto.</Heading>
                </CardHeader>
                <CardBody className={Style.containerForm}>
                    <form action="/send-data-here" method="post" className={Style.form}>
                        <div>
                            <InputGroup  className={Style.inputGroup}>
                                <InputLeftElement pointerEvents='none'>
                                <AiOutlineUser/>
                                </InputLeftElement>
                                < Input focusBorderColor='red.400' placeholder='Nombre y Apellido' />
                            </InputGroup>
                        </div>
                        <div>
                            <InputGroup className={Style.inputGroup}>
                                <InputLeftElement pointerEvents='none'>
                                <AiOutlineMail/>
                                </InputLeftElement>
                                <Input focusBorderColor='red.400' type='email' placeholder='Correo Electrónico' />
                            </InputGroup>
                        </div>
                        <div>
                        <InputGroup className={Style.inputGroup}>
                            <InputLeftElement pointerEvents='none'>
                            <AiOutlinePhone />
                            </InputLeftElement>
                            <Input focusBorderColor='red.400' type='tel' placeholder='Número De Whatsapp' />
                        </InputGroup>
                        </div>
                        <div>
                            <Textarea
                                className={Style.textArea}
                                value={value}
                                focusBorderColor='red.400'
                                placeholder='Comentarios'
                                size='md'
                            />
                        </div>
                        <Button colorScheme='red'>Enviar</Button>
                    </form>
                </CardBody>
            </Card>
        </section>
    )
}

export default Form;
