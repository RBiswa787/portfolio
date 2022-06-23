import {useEffect, useState, useRef} from 'react';
import { AppBar,Container,IconButton,requirePropFactory,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub,Twitter,LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  section_main : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#242c34",
    paddingLeft : "7%",
    paddingRight: "7%"
  },
  section_about : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft : "7%",
    paddingRight: "7%",
  },
  maintext: {
    fontFamily: "Quicksand",
    fontSize: 34,
    [theme.breakpoints.down(500)]: {
      fontSize: "1.7em"
    },
    color: "white",
    textAlign: "center",
  },
  resume : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "12%",
    aspectRatio: 4,
    marginTop: "3%",
    border: "3px solid white",
    [theme.breakpoints.down(500)]: {
      width: "50%",
      aspectRatio: 4,
      marginTop: "10%",
    },
    '&:hover': {
      background: "#FF8882",
      border: "none",
    }
  },
  down: {
    width: "100%",
    marginTop: "-0.01%",
    [theme.breakpoints.down(500)]: {
      marginTop: "-0.2%"
    },
  },
  abouthead: {
    fontFamily: "Montserrat",
    fontSize: 37,
    marginTop: "4%",
    fontWeight:"500",
    [theme.breakpoints.down(500)]: {
      marginTop: "10%"
    },
  },
  me: {
    width: "47%",
    marginTop: "15%",
    [theme.breakpoints.down(500)]: {
      width: "50%",
      marginTop: "10%",
    },
  },
  socials: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
    height: "7%",
    marginTop: "7%",
    [theme.breakpoints.down(500)]: {
      marginTop: "15%",
      width: "70%"
    },
  },
  socialicongithub: {
    color: "black",
    '&:hover': {
      color: "#646464",
    }
  },
  socialiconlinkedin: {
    color: "#0077b5",
    '&:hover': {
      color: "#646464",
    }
  },
  socialicontwitter: {
    color: "#00acee",
    '&:hover': {
      color: "#646464",
    }
  },
  aboutmain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(500)]: {
      flexDirection: "column"
    },
    height: "100%"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width : "50%",
    [theme.breakpoints.down(500)]: {
      width: "100%",
      height: "45%"
    },
    height: "100%",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width : "50%",
    [theme.breakpoints.down(500)]: {
      width: "100%",
      height: "50%"
    },
    height: "100%",
  },
  abouttype: {
    fontFamily: "Montserrat",
    fontSize: 23,
    textAlign: "center",
    marginTop: "30%",
    [theme.breakpoints.down(500)]:{
      marginTop: "2%"
    }
  }
}))


function App() {

  const classes = useStyles();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  return (
    <div style={{width: windowSize.innerWidth}}>
      <div style={{height: windowSize.innerHeight}} className={classes.section_main}>
        <Typography className= {classes.maintext}>
          Hi, I'm <span style={{color: "#FF7272"}}>Biswadeep Ray</span>.
        </Typography>
        <Typography className= {classes.maintext}>
          I'm a developer who loves building things for the web.
        </Typography>
        <Container className={classes.resume}>
         <Typography style={{fontFamily:"Quicksand",color: "white"}}>Resume</Typography>
        </Container>
      </div>
      <img src={require('./Polygon.png')} className={classes.down}/>
      <div style={{height: 0.9*windowSize.innerHeight}} className={classes.section_about}>
        <Typography className={classes.abouthead}>A<span style={{color: "#FF8882"}}>B</span>OUT</Typography>
        <Container className={classes.aboutmain}>
          <Container className={classes.left}>
              <img src={require('./meimg.png')} className={classes.me}/>
              <Container className={classes.socials}>
                <GitHub style={{width: "33%",fontSize: 35}} className={classes.socialicongithub}></GitHub>
                <LinkedIn style={{width: "33%",fontSize: 35}} className={classes.socialiconlinkedin}></LinkedIn>
                <Twitter style={{width: "33%",fontSize: 35}} className={classes.socialicontwitter}></Twitter>
              </Container>
          </Container>
          <Container className={classes.right}>
            <Typography className={classes.abouttype}>
              I am a pre-final year Computer Science engineering student based in India. I am passionate about ideating 
              and developing digital experiences.
            </Typography>
          </Container>
        </Container>
      </div>
    </div>
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default App;
