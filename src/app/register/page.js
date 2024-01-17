"use client";
import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Registrarse
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          Usuario creado.<br />
          Ahora usted puede{' '}
          <Link className="underline" href={'/login'}>Iniciar Sesión &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          ¡Ups..! Ha ocurrido un error.<br />
          Por favor intente de nuevo.
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email}
               disabled={creatingUser}
               onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="Contraseña" value={password}
               disabled={creatingUser}
                onChange={ev => setPassword(ev.target.value)}/>
        <button type="submit" disabled={creatingUser}>
          Registrarse
        </button>
        <div className="my-4 text-center text-gray-500">
          Iniciar sesión con un proveedor
        </div>
        <button
          onClick={() => signIn('google', {callbackUrl:'/'})}
          className="flex gap-4 justify-center">
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Iniciar sesión con Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
        ¿Cuenta existente?{' '}
          <Link className="underline" href={'/login'}>Ingresa aquí... &raquo;</Link>
        </div>
      </form>
    </section>
  );
}