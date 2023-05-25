import { TestService } from '../../services/TestService';
import { TestCss } from '../../styles/apply/TestCss';
import Modal from '../Modal';
import { Form } from './Form';
import { Tempo } from './Tempo';

export function Test () {
    const {
        points,
        modalOpen,
        punctuation,
        handleChange,
        handleSubmit,
        openModal,
      } = TestService();
    return(
        <TestCss punctuation={punctuation}>
            <h2 className='h2'>Realiza los test para demostrar tus conocimientos al reclutador</h2>
            <p className='advertencia'>Al iniciar los test ten en cuenta que no los puedes cerrar hasta terminarlos y vas a tener 10 minutos para contestarlos</p>
            {
                punctuation ?
                 <div className='punctuation'>
                    <div className='encabezado'>
                        <p className='nameTest'>JavaScript</p>
                        <p>{points} de 15 preguntas Bien</p>
                    </div>
                    <div className='skilBar skilBar70'></div>
                 </div>
                : <button onClick={openModal} value='JavaScript'>JavaScript</button>
            }
            <Modal isOpen={modalOpen} onClose={handleSubmit}>
                <form id="formulario" onSubmit={handleSubmit}>
                    <Tempo finish={() => handleSubmit(event)}/>
                    <Form change={handleChange}/>
                    <input className='button' type="submit" value="Finalizar Prueba"/>
                </form>
            </Modal>
        </TestCss>
    )
}

