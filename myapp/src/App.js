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
  section_education : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F3F3F3",
    paddingLeft : "7%",
    paddingRight: "7%",
  },
  section_skills : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft : "7%",
    paddingRight: "7%",
  },
  section_education : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F3F3F3",
    paddingLeft : "7%",
    paddingRight: "7%",
  },
  section_project : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#242c34",
    paddingLeft : "7%",
    paddingRight: "7%",
  },
  section_blog : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft : "7%",
    paddingRight: "7%",
  },
  section_footer : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    background: "#242c34",
    paddingLeft : "7%",
    paddingRight: "7%",
    paddingBottom: "5%",
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
    },
  },
  eduhead: {
    fontFamily: "Montserrat",
    fontSize: 37,
    marginTop: "5%",
    fontWeight:"500",
    [theme.breakpoints.down(500)]: {
      marginTop: "15%"
    },
  },
  projecthead: {
    fontFamily: "Montserrat",
    fontSize: 37,
    marginTop: "5%",
    fontWeight:"500",
    color: "white",
    [theme.breakpoints.down(500)]: {
      marginTop: "15%"
    },
  },
  unideg: {
    color: "#FF8882",
    fontFamily: "Montserrat",
    fontSize: 25,
    marginTop: "20%",
    fontWeight: "bold",
    [theme.breakpoints.down(500)]: {
      marginTop: "15%"
    },
  },
  unicourse: {
    fontFamily: "Montserrat",
    fontSize: 15,
    marginTop: "1%",
    fontWeight: "600",
    [theme.breakpoints.down(500)]: {
      marginTop: "5%"
    },
  },
  uniname: {
    fontFamily: "Montserrat",
    fontSize: 14,
    marginTop: "1.5%",
    [theme.breakpoints.down(500)]: {
      marginTop: "5%"
    },
  },
  eduleft: {
    display: "flex",
    flexDirection: "column",
    width : "50%",
    [theme.breakpoints.down(500)]: {
      width: "100%",
      height: "40%"
    },
    height: "100%",
  },
  eduright: {
    display: "flex",
    flexDirection: "column",
    width : "50%",
    [theme.breakpoints.down(500)]: {
      width: "100%",
      height: "40%"
    },
    height: "100%",
  },
  skillhead: {
    fontFamily: "Montserrat",
    fontSize: 37,
    marginTop: "5%",
    fontWeight:"500",
    [theme.breakpoints.down(500)]: {
      marginTop: "15%"
    },
  },
  skillmain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "70%",
    width: "70%",
    [theme.breakpoints.down(900)]: {
      width: "100%"
    },
  },
  skillunit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: "40px",
    border: "2px solid #FF8882",
    marginLeft: "3%",
    [theme.breakpoints.down(900)]: {
      width: "95%",
      marginTop: "3%"
    },
    '&:hover': {
      background: "#FF8882",
      color: "white"
    }
  },
  skillgroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "3%",
  },
  bloghead: {
    fontFamily: "Montserrat",
    fontSize: 37,
    marginTop: "5%",
    fontWeight:"500",
    [theme.breakpoints.down(500)]: {
      marginTop: "15%"
    },
  },
  footer: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 18,
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
      <div style={{height: windowSize.innerHeight}} className={classes.section_education}>
      <Typography className={classes.eduhead}>E<span style={{color: "#FF8882"}}>DU</span>CATION</Typography>
      <Container className={classes.aboutmain}>
        <Container className={classes.eduleft}>
          <Typography className={classes.unideg}>Bachelor of Technology</Typography>
          <Typography className={classes.unicourse}>Computer Science and Engineering with Spec. in Cyber Physical Systems</Typography>
          <i><Typography className={classes.uniname}>Vellore Institute of Technology, Chennai, India (2020-24)</Typography></i>
        </Container>
        <Container className={classes.eduright}>
          <Typography className={classes.unideg}>Bachelor of Science</Typography>
          <Typography className={classes.unicourse}>Programming and Data Science</Typography>
          <i><Typography className={classes.uniname}>Indian Institute of Technology, Madras, India (2021-24)</Typography></i>
        </Container>
      </Container>
      </div>
      <div style={{height: windowSize.innerHeight}} className={classes.section_skills}>
      <Typography className={classes.skillhead}>S<span style={{color: "#FF8882"}}>KI</span>LLS</Typography>
      <Container className={classes.skillmain}>
        {
          windowSize.innerWidth >= 900 && (
            
              <Container className={classes.skillmain}>
                <Container className={classes.skillgroup}>
                  <div className={classes.skillunit}>C++</div>
                  <div className={classes.skillunit}>Python</div>
                  <div className={classes.skillunit}>ReactJS</div>
                </Container>
                <Container className={classes.skillgroup}>
                  <div className={classes.skillunit}>React Native</div>
                  <div className={classes.skillunit}>NodeJS</div>
                  <div className={classes.skillunit}>Flask</div>
                  <div className={classes.skillunit}>MySQL</div>
                </Container>
                <Container className={classes.skillgroup}>
                  <div className={classes.skillunit}>PostgreSQL</div>
                  <div className={classes.skillunit}>Cloud Databases</div>
                  <div className={classes.skillunit}>Docker</div>
                </Container>
              </Container>
            
          )
        }
        {
          windowSize.innerWidth < 900 && (
            
            <Container className={classes.skillmain} style={{flexDirection: "column"}}>
              <div className={classes.skillunit}>C++</div>
              <div className={classes.skillunit}>Python</div>
              <div className={classes.skillunit}>ReactJS</div>
              <div className={classes.skillunit}>React Native</div>
              <div className={classes.skillunit}>NodeJS</div>
              <div className={classes.skillunit}>Flask</div>
              <div className={classes.skillunit}>MySQL</div>
              <div className={classes.skillunit}>PostgreSQL</div>
              <div className={classes.skillunit}>Cloud Databases</div>
              <div className={classes.skillunit}>Docker</div>
            </Container>

          )
        }
        
      </Container>
      </div>
      <div style={{height: windowSize.innerHeight}} className={classes.section_project}>
      <Typography className={classes.projecthead}>P<span style={{color: "#FF8882"}}>RO</span>JECTS</Typography>
      </div>
      <div style={{height: windowSize.innerHeight}} className={classes.section_blog}>
      <Typography className={classes.bloghead}>B<span style={{color: "#FF8882"}}>L</span>OG</Typography>
      </div>
      <div style={{height: 0.15*windowSize.innerHeight}} className={classes.section_footer}>
      <Typography className={classes.footer}>Made with 🧡	by Biswadeep © 2022</Typography>
      </div>
    </div>
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export default App;
