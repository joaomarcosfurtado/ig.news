import { useState } from 'react';

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';

export function SignInButton () {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true)
  
  return isLoggedIn ? (
    
    <button 
      type="button"
      className={styles.signInButton}
    > 
      <FaGithub color="#04D361"/>
      João Marcos Furtado
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
    > 
      <FaGithub color="#EBA417"/>
      Sign in with Github
    </button>
  )
}