import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h1 className="bold opacity " style={{ fontSize: "23px" }}>
          Frequently Asked Questions
        </h1>

        <Accordion defaultActiveKey="0" className="py-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is the refund policy?</Accordion.Header>
            <Accordion.Body className="bold ">
              If you subscribed, you get a 7-day free trial during which you can
              cancel at no penalty. After that, we don't give refunds, but you
              can cancel your subscription at any time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Can I just enroll in a single course?
            </Accordion.Header>
            <Accordion.Body className="bold ">
              Yes! To get started, click the course card that interests you and
              enroll. You can enroll and complete the course to earn a shareable
              certificate, or you can audit it to view the course materials for
              free. When you subscribe to a course that is part of a
              Specialization, you're automatically subscribed to the full
              Specialization. Visit your learner dashboard to track your
              progress.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is financial aid available?</Accordion.Header>
            <Accordion.Body className="bold ">
              Yes. In select learning programs, you can apply for financial aid
              or a scholarship if you can't afford the enrollment fee. If fin
              aid or scholarship is available for your learning program
              selection, you'll find a link to apply on the description page.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I take the course for free?</Accordion.Header>
            <Accordion.Body className="bold ">
              When you enroll in the course, you get access to all of the
              courses in the Specialization, and you earn a certificate when you
              complete the work. If you only want to read and view the course
              content, you can audit the course for free. If you cannot afford
              the fee
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Is this course really 100% online? Do I need to attend any classes
              in person?
            </Accordion.Header>
            <Accordion.Body className="bold ">
              This course is completely online, so there's no need to show up to
              a classroom in person. You can access your lectures, readings and
              assignments anytime and anywhere via the web or your mobile
              device.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              When will I have access to the lectures and assignments?
            </Accordion.Header>
            <Accordion.Body className="bold ">
              Access to lectures and assignments depends on your type of
              enrollment. If you take a course in audit mode, you will be able
              to see most course materials for free. To access graded
              assignments and to earn a Certificate, you will need to purchase
              the Certificate experience, during or after your audit. If you
              don't see the audit option: The course may not offer an audit
              option. You can try a Free Trial instead, or apply for Financial
              Aid. The course may offer 'Full Course, No Certificate' instead.
              This option lets you see all course materials, submit required
              assessments, and get a final grade. This also means that you will
              not be able to purchase a Certificate experience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              What tools or materials do I need?
            </Accordion.Header>
            <Accordion.Body className="bold ">
              To complete the assignments in most of the courses in this
              Specialization you will need access to a computer. It's the tool
              where most graphic design ends up in one way or another. Access
              to, and a beginner's level knowledge of Adobe Creative Suite
              programs, such as In Design, Illustrator or Photoshop will be
              needed to complete some assignments. For some courses you will
              also need some art materials as well. Specific information on
              tools and materials are outlined in the first week of each course.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h1 className="bold opacity " style={{ fontSize: "17px" }}>
          More questions? Use the chat bot
        </h1>
      </div>
    </section>
  );
};

export default Faq;
