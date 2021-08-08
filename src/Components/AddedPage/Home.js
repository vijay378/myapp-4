import Slidder from "../Slidder";
import {Container, Image,} from 'react-bootstrap'
import './StyleSheet/Home.css'
import Footer from "../FooterSection/Footer";

function Home() {
    return(
        <>
           
            <Slidder/>
            <div className="welcome"><br/>
            <h1>Welcome to ABC - Institute</h1>
            <Container>
            <p>ABC - Institue is a place where we inspire our students, 
            teammate, associate, parent to unearth the world with core hearts and 
            eager minds.</p>
            <p>As a credence community, Bright Career strives to provide each student 
            with a rich academic background, an appropriate sense of self, an opportunity 
            for growth, a commitment to family, community, nation and world, and a respect \
            for the spiritual dignity of all persons.</p>
            </Container><br/>
            <h1>Principal Message</h1>
            <div>
            <Image src="https://www.apeejay.edu/noida/images/principal-image/mr-ak-sharma.jpg" 
            roundedCircle style={{height:"250px", width:"250px", border:"5px Solid", borderColor:"green"}}/>
            </div>
            
            <span><samll>Mr. XYZ</samll></span>
            <Container>
                <p>I believe my role as an educator is to guide and nurture the next generation 
                o establish skills to achieve health, respect, prosperity and fulfillment.</p>
                <p> am an avid supporter of effective and innovative professional development that encourages 
                teachers and principals to be reflective and to continuously examine our practice to 
                provide quality teaching and learning for each student. My role as Principal is to 
                keep up with latest trends and research and be an active partner in the school's 
                professional development.</p>
                <p>
                I enjoy celebrating successes and acknowledge hard work of staff, students and community and believe this is one of the contributors fundamental to a happy school environment. All staff, students and community should feel valued and appreciated at school. 


                </p>
                <p>
                Community engagement and involvement in the school is important to me as Principal. I regularly consult with my community as part of school self review and encourage community engagement in the curriculum and learning programmes.
                </p>
            </Container>
            <Footer/>
            </div>
            
        </>
    )
}

export default Home;