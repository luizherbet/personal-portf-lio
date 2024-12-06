import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../assets/img/bannerImg.png';

function Banner() {
  const words = ['a Web Developer', 'an Artist', 'a Writer'];
  const typingSpeed = 150; // Velocidade de digitação
  const pauseTime = 2000; // Pausa antes de apagar ou trocar de palavra

  const [text, setText] = useState(''); // Texto exibido
  const [wordIndex, setWordIndex] = useState(0); // Palavra atual
  const [isDeleting, setIsDeleting] = useState(false); // Está apagando?

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      // Apagando texto
      timer = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length); // Próxima palavra
          let pause = setTimeout(() => setIsDeleting(false), 2000);
          return clearTimeout(pause);
        }
      }, typingSpeed);
    } else {
      // Digitando texto
      timer = setTimeout(() => {
        setText(prev => currentWord.slice(0, prev.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseTime); // Espera antes de apagar
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer); // Limpa o temporizador
  }, [text, isDeleting, wordIndex, words]);

  return (
    <section className="banner">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <h1 className="text">
              Hi, I'm <span className="typing">{text}</span>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={bannerImg} alt="Banner Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
