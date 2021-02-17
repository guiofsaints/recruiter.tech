import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import React from "react";
import RoundedButton from "../../Form/RoundedButton";
import useStyles from "./Benefits.style";

const Benefits = (): JSX.Element => {
  const classes = useStyles();
  const BenefitsData = [
    {
      key: 1,
      img: (
        <img
          src="/images/cards/card-free.png"
          width={150}
          alt="Imagem com uma pessoa e um cofrinho"
        />
      ),
      title: "É Grátis",
      description:
        "Não cobramos NADA para você utilizar a plataforma, o objetivo aqui é aumentar a diversidade nas empresas e não ganhar dinheiro."
    },
    {
      key: 2,
      img: (
        <img
          src="/images/cards/card-premium.png"
          width={150}
          alt="Imagem com uma pessoa vendo conteúdo exclusivo"
        />
      ),
      title: "Vagas Exclusivas",
      description:
        "Receba informações de vagas, notícias e cursos sobre tecnologia. Conteúdo com foco na diversade e inclusão."
    },
    {
      key: 3,
      img: (
        <img
          src="/images/cards/card-network.png"
          width={150}
          alt="Imagem com uma pessoa vendo conteúdo exclusivo"
        />
      ),
      title: "Aumente seu Networking",
      description:
        "Estamos construíndo uma comunidade para você conhecer novas pessoas com interesse em comum."
    }
  ];

  const BenefitsCard = ({ img, title, description }): JSX.Element => (
    <Card className={classes.card}>
      <CardContent>
        <Box component="div" style={{ textAlign: "center" }}>
          {img}
        </Box>
        <Typography
          variant="body1"
          component="h3"
          className={classes.cardTitle}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.cardDescription}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <section>
      <Container maxWidth="md">
        <List
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 0,
            overflow: "auto",
            marginTop: 10,
            alignItems: "center"
          }}
        >
          {BenefitsData.map((item) => (
            <ListItem key={item.key} disableGutters>
              <BenefitsCard {...item} />
            </ListItem>
          ))}
        </List>
        <div className={classes.journey}>
          <Box mt={4}>
            <Typography variant="h6" component="h2">
              Vamos começar sua jornada?
            </Typography>
          </Box>
          <Box mt={2} mb={4}>
            <Link href="/signup">
              <RoundedButton>Criar Perfil</RoundedButton>
            </Link>
            <Link href="/contact">
              <RoundedButton>Encontrar Pessoas</RoundedButton>
            </Link>
          </Box>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
