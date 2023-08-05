import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Badge, Box, Button, ButtonGroup, Heading, List, ListItem, Text } from "@chakra-ui/react";

type AboutSectionDataDate = {
    year: number;
    month?: 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'November' | 'December';
};

type AboutSectionDataItem = {
    organisation: string;
    positions: Array<{
        position: string;
        description?: string;
        from?: AboutSectionDataDate;
        to?: AboutSectionDataDate;
        technologies: Array<string>;
    }>;
};

type AboutSectionData = {
    title: string, items: Array<AboutSectionDataItem>
};

const formatDate = ({ year, month }: AboutSectionDataDate): string => {
    if (!year) {
        return '';
    }

    if (!month) {
        return `${year}`;
    }

    return `${year}. ${month}`;
};

const AboutSection = ({ title, items }: AboutSectionData): JSX.Element => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>

            <Heading as='h2' size="3xl" noOfLines={1}>{title}</Heading>
            <List spacing={3}>
                {items.map(({ organisation, positions }) => (
                    <ListItem as={Box}>
                        <Heading as='h3' size="2xl">{organisation}</Heading>
                        {positions.map(({ position, description, from, to, technologies }) => <Box sx={{
                            width: '80vw',
                            height: '10rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.625rem',
                            border: '1px solid rgba(246, 211, 45, 0.59)',
                            background: 'rgba(246, 211, 45, 0.18)',
                            backdropFilter: 'blur(13px)',
                            padding: '0.5rem',
                        }}>
                            <Heading as='h4' size="xl">
                                {position}
                                <Badge variant='outline' colorScheme='green' sx={{ marginLeft: '2rem' }}>
                                    {from && formatDate(from)} - {to && formatDate(to)}
                                </Badge>
                            </Heading>
                            <Text fontSize="md">{description}</Text>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.6rem'
                            }}>
                                {technologies.map((technology) => <Badge variant="outline" colorScheme="red">{technology}</Badge>)}
                            </Box>
                        </Box>)}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

const sections: Array<AboutSectionData> = [
    { title: 'About', items: [] },
    {
        title: 'Experience',
        items: [
            {
                organisation: 'Artera',
                positions: [
                    {
                        position: 'Software Engineer',
                        description: 'I am currently working at Artera (formerly WELL Health) as a full-stack software engineer on the development of an information system to facilitate communication in healthcare. My work has included a rebranding process, message automations and settings management.',
                        from: { year: 2022, month: 'August' },
                        to: { year: 2023, month: 'September' },
                        technologies: [
                            'JavaScript',
                            'TypeScript',
                            'React.js',
                            'Material UI',
                            'Nest.js',
                            'Express.js',
                            'Jest',
                            'HTML',
                            'CSS',
                            'SASS'
                        ],
                    }
                ],
            },
            {
                organisation: 'One Beyond',
                positions: [
                    { position: 'Full-stack JavaScript Engineer', description: 'I helped ContentCal/Adobe to bring scalable, robust social media automation capabilities to Adobe Express platform for millions of users as a full-stack software engineer.', from: { year: 2021, month: 'June' }, to: { year: 2022, month: 'August' }, technologies: [] }
                ]
            },
            {
                organisation: 'DACHS Computing & Biosciences',
                positions: [
                    { position: 'Application Developer', description: 'I worked as a full-stack software engineer developing cloud-based collaboration and document management/document processing web applications for pharmaceutical companies. I gained experience in programmatic processing of XLSX and PDF documents.I worked as a full-stack software engineer developing cloud-based collaboration and document management/document processing web applications for pharmaceutical companies. I gained experience in programmatic processing of XLSX and PDF documents.', from: { year: 2019, month: 'June' }, to: { year: 2021, month: 'June' }, technologies: [] },
                    { position: 'Application Developer Intern', description: '', from: { year: 2018, month: 'July' }, to: { year: 2019, month: 'June' }, technologies: [] }
                ]
            }]
    },
    // { title: 'Open Source Contributions', items: [] },
    {
        title: 'Education', items: [
            {
                organisation: 'University of Miskolc',
                positions: [
                    { position: 'Computer Science Engineering MSc', description: 'My specialization is application development.', from: { year: 2020 }, technologies: [] },
                    { position: 'Computer Science BSc', description: 'My specialization was modern web technologies (JavaScript, Node.JS, Express.JS, MongoDB, Bootstrap, React). Wrote my thesis work about implementing numerical methods in the Rust programming language and compare their performance with their C counterparts.My specialization was modern web technologies (JavaScript, Node.JS, Express.JS, MongoDB, Bootstrap, React). Wrote my thesis work about implementing numerical methods in the Rust programming language and compare their performance with their C counterparts.', from: { year: 2016 }, to: { year: 2019 }, technologies: [] }]
            }
        ]
    },
];

const AboutPage = () => {
    return (<>
        <Layout>
            <Head>
                <title>{"Bence László - bencelaszlo.hu"}</title>
            </Head>
            <Container >
                <Heading as='h1' size='4xl' noOfLines={1}>
                    Bence László
                </Heading>
                <Text as="p" size="md">bencelaszlo</Text>
                <Heading as="p" size="md">Software Engineer</Heading>
            </Container>
            {sections.map((section) => <AboutSection {...section} />)}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Heading as="h2" size="3xl">Contact</Heading>
                <ButtonGroup>
                    <Button>LinkedIn</Button>
                    <Button>GitHub</Button>
                    <Button>GitLab</Button>
                    <Button>Email</Button>
                </ButtonGroup>
            </Box>
        </Layout>
    </>);
};

export default AboutPage;