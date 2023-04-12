import React from 'react'
import { Routes,Route} from 'react-router-dom'
import {Aws} from './Aws'
import network from './networking3.png'
import cloud from './cloud2.png'
import web from './web.png'
import it from './it.png'
import data from './data2.png'
import consult from './conslut.png' 
import iottest from "./iottest.png"
export const Completeaws = () => {
    const infoall=[
        {
          iot:{
            heading:'IOT SERVICES',
            headingpara:`“We Provide IoT applications allow retail companies to manage inventory, improve customer experience, optimize supply chain, and reduce operational costs."`,
            image:"https://www.mouser.com/empowering-innovation/portals/1/skins/Empowering-innovation/images/sensors-oneblock3.png",
            internal:{
                one:{
                head:'IoT App Development',
                img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",

                },
                two:{
                  head:'IoT-Wearable Development',
                  img:"https://iotdesignpro.com/sites/default/files/inline-images/Wearable-IoT-Fitness-Tracker.png",
                  text:"  IoT development that brings out the best by combining IoT and Wearables, and creating extraordinary products.",

                  },
                  three:{
                      head:'IoT Security',
                      img:"https://anarsolutions.com/wp-content/uploads/2018/07/IoT-Security-Testing.png",
                      text:"  We ensure a robust IoT ecosystem, with the connected data, devices, business applications and communication networks being able to exchange information in a seamless yet secure manner. With us, businesses can be sure that their IoT transition is safe and secure.",
    
                      },
                  four:{
                          head:'Upgrades and Migration',
                          img:"https://www.narolasolutions.com/images/service-upgrades-migration-diagram.png",
                          text:" We help businesses to enhance their existing systems and resources with upgrades of applications, versions, and technologies, as the need may be. Our extensive IoT solutions take businesses on the growth route as they embrace digital transformation.",
        
                          },
                  five:{
                              head:'IoT Testing',
                              img:iottest,
                              text:" We have the best Set of QA engineers that look after the applications and perform both functional as well as non-functional testing.more.",
            
                          },
                          six:{
                            head:'IoT consulting',
                            img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                            text:"   We extend expert IoT consulting and insights to help the clients for embracing IoT as a part of their existence. From roadmap creation, to use case preparation, business KPIs, and ROI mapping, we take care of the entire aspects of planning IoT adoption for the business.",
          
                        },
                            
            },
            subheadpart:`
            An IoT ecosystem consists of web-enabled smart devices that use embedded systems, such as processors, sensors and communication hardware, to collect, send and act on data they acquire from their environments. IoT devices share the sensor data they collect by connecting to an IoT gateway or other edge device where data is either sent to the cloud to be analyzed or analyzed locally. Sometimes, these devices communicate with other related devices and act on the information they get from one another. The devices do most of the work without human intervention, although people can interact with the devices -- for instance, to set them up, give them instructions or access the data.`

          },
            web:{
              heading:'WEB APPLICATION DEVELOPMENT SERVICES',
              headingpara:`“ We provide end to end web application development services including prototyping, building, redesigning, or migrating web apps. "`,
              image:web,
              internal:{
                  one:{
                  head:'Custom Web developement',
                  img:"https://mindster.com/wp-content/themes/mindster/img/20.3.png",
                  text:"  We develop customised web applications for our customers. Our process ensures 360 degree support and quality maintenance. We will handle the backend as well as front end development along with testing and support..",

                  },
                  two:{
                    head:'Responsive Web App Designs',
                    img:"https://mindster.com/wp-content/themes/mindster/img/responsive.png",
                    text:"  We create responsive web app designs that accentuates user experience and easy navigation. Our designers have years of experience to aid the design process and create perfect web apps..",
  
                    },
                    three:{
                        head:'Web App Consulting',
                        img:"https://mindster.com/wp-content/themes/mindster/img/ssl.png",
                        text:"  Need some expert advice? We can help you with it. We will provide you the best web app consulting services to forge a world-class application. Join us and get upgraded..",
      
                        },
                    four:{
                            head:'Web App Re-engineering',
                            img:"https://mindster.com/wp-content/themes/mindster/img/speed.png",
                            text:"  Tired of your old-school web application. We’ve got it covered for you. Our experts will reengineer your web app and create the best one in the industry for you..",
          
                            },
                            five:{
                                head:'E-commerce Web App Development',
                                img:"https://mindster.com/wp-content/themes/mindster/img/ecomm-web.png",
                                text:"  E-commerce web application to carry out online sales. Integrate your business with a web application and witness the growth in sales as well as visitors to your website within a short period of time..",
              
                                },
                                six:{
                                  head:'Web App CMS',
                                  img:"https://mindster.com/wp-content/themes/mindster/img/frameworks.png",
                                  text:"  Managing the content in you web application is another service we offer. Our experts ensure quality content management as well as manage them efficient..",
                
                                  },
              },
              headpart : `The Web Application Services We Offer`,
              subheadpart:`A web application is any kind of online service that is accessible through a web browser.

              It is basically a computer program that runs on a web server and can be accessed via a web browser & an active internet connection.
              
              A web application generally consists of two main parts – Server-side & Client-side.
              
              The server-side help to store & retrieve data, while the client-side helps to display the retrieved data to end-users on the front-end of a web application.`

            },
              cloud:{
                heading:'CLOUD SERVICES',
                headingpara:`“We Provide Cloud services are infrastructure (Iaas), platforms (Paas), or software (Saas) that are hosted by third-party providers and made available to users through the internet. "`,
                image:cloud,
                internal:{
                    one:{
                    head:'cloud security services',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:"  Cloud security refers to the technologies, policies, controls, and services that protect cloud data, applications, and infrastructure from threats—from a high-level perspective of security. In the post-COVID 19 era, and with the inevitable trend of remote working, it means protection of your company’s data that is stored online—protection from theft, leakage, and deletion by rogue agents using unlawful sophisticated means to access your company’s information..",
  
                    },
                    two:{
                      head:'Cloud optimiation',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  Cloud optimization is an essential part of every cloud transformation story. It describes the process of intelligence-driven selection and assignment of the right resources to a specific workload or application. A business investing in the process of cloud transformation achieves optimal efficiency when workload performance, compliance, and cost are correctly and continually balanced against the best-fit infrastructure on a real-time basis. On the other hand, some businesses leave their apps running at full level and only bother to tune these apps for performance when they’ve failed to meet SLAs, or as a response to downtime. Legacy businesses also tend to overprovision, just in order to pre-buy peace of mind. ",
    
                      },
                      three:{
                          head:'Cloud managed services',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  .",
        
                          },
                      four:{
                              head:'Cloud Migration Services',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
            
                              },
                              five:{
                                  head:'Data & Analytics ',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                
                                  },
                                  six:{
                                    head:'Virtual Desktop Infrastructure ',
                                    img:"",
                                    text:"  Remote work is a working style that allows professionals to work from anywhere outside of their regular office environment—either while in transit or due to governance mandates enacted from time to time. Prior to the pandemic, remote working was merely considered a part of a Business Continuity Plan (BCP) by bigger technology companies in the event of a natural disaster or other public emergencies. Remote working became a reality after the onset of the ongoing COVID-19 pandemic, where nearly all businesses were compelled to close their physical premises down as a basic means to contain the spread of the outbreak and to keep their employees protected from unnecessary exposure to the risk of infection..",
                  
                                    },
                },
                headpart : `The term "cloud services" refers to a wide range of services delivered on demand to companies and customers over the internet. These services are designed to provide easy, affordable access to applications and resources, without the need for internal infrastructure or hardware. From checking email to collaborating on documents, most employees use cloud services throughout the workday, whether they’re aware of it or not.`,
                subheadpart:`Cloud services are fully managed by cloud computing vendors and service providers. They’re made available to customers from the providers' servers, so there's no need for a company to host applications on its own on-premises servers..`
  
  
              },
              consulting:{
                heading:'IT Consultiong SERVICES',
                headingpara:`“Our IT consulting company works with clients to help them solve IT problems. The field includes everything from basic network analytics assistance all the way up to managed IT solutions."`,
                image:consult,
                internal:{
                    one:{
                    head:'Find the best path forward',
                    img:"https://www.redhat.com/cms/managed-files/styles/xlarge/s3/tailoredAdaptableCloudStrategy_457x203.jpg?itok=xc6qAXg5",
                    text:"  Our consultants will work with you to evaluate and implement the hybrid cloud solutions that work best to help you reduce costs, improve efficiency, and deliver quickly..",
  
                    },
                    two:{
                      head:'Hands-on experience',
                      img:"https://www.redhat.com/cms/managed-files/styles/xlarge/s3/Red-Hat-handsOnExperience203.png?itok=IDSxRfc7",
                      text:" Our consultants help your teams gain comprehensive, practical experience with the open source tools, processes, and culture that work together to improve flexibility, increase efficiency, and foster innovation. .",
    
                      },
                      three:{
                          head:'Automation First',
                          img:"https://www.redhat.com/cms/managed-files/styles/xlarge/s3/Red-Hat-teams-connect-with-automation.jpg?itok=3ljnSBb4",
                          text:"  We share our extensive open source knowledge directly with your teams to improve efficiency, boost productivity, and better manage risk by helping them create governed, predictable automation workflows across your organization..",
        
                          },
                      four:{
                              head:'Deploy with confidence',
                              img:"",
                              text:"  Our open source experts will guide your teams to modernize and streamline cloud-native app development with containers. Stay competitive and maximize your investment by delivering apps faster..",
            
                              },
                              five:{
                                  head:'',
                                  img:"",
                                  text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                
                                  },
                                  six:{
                                    head:'',
                                    img:"",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                }
  
              },
              network:{
                heading:'Network SERVICES',
                headingpara:`“We Provided software hosting, file storage and sharing, messaging, data storage and retrieval, complete access control (security) for the network's resources, and many others."`,
                image:network,
                internal:{
                    one:{
                    head:'Accounting',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:"  In an organization, a number of users have their user names and passwords mapped to them. Directory Services provide means of storing this information in cryptic form and make available when requested..",
  
                    },
                    two:{
                      head:'Domain Name Services(DNS)',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  DNS is widely used and one of the essential services on which internet works. This system maps IP addresses to domain names, which are easier to remember and recall than IP addresses. Because network operates with the help of IP addresses and humans tend to remember website names, the DNS provides website’s IP address which is mapped to its name from the back-end on the request of a website name from the user..",
    
                      },
                      three:{
                          head:'Social Networking',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  Recent technologies have made technical life social. The computer savvy peoples, can find other known peoples or friends, can connect with them, and can share thoughts, pictures, and videos..",
        
                          },
                      four:{
                              head:'Databases',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  This Network application service is one of the most important services. It stores data and information, processes it, and enables the users to retrieve it efficiently by using queries. Databases help organizations to make decisions based on statistics..",
            
                              },
                              five:{
                                  head:'Authentication and Authorization',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  User credentials are checked to authenticate a user at the time of login and/or periodically. User accounts can be set into hierarchical structure and their access to resources can be controlled using authorization schemes..",
                
                                  },
                                  six:{
                                    head:'Authentication and Authorization',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  User credentials are checked to authenticate a user at the time of login and/or periodically. User accounts can be set into hierarchical structure and their access to resources can be controlled using authorization schemes..",
                  
                                    },
                }
  
              },
              data:{
                heading:'Big Data Analytics Solutions',
                headingpara:`“Gain Valuable Insights From Your Data Using Top-Of-The-Line Analytics Technologies And Expertise. Empower Your Business With Our Result-Oriented Big Data Analytics Solutions That Transform Your Business Data Into Actionable Insights."`,
                image:data,
                internal:{
                    one:{
                    head:'Apache Hadoop',
                    img:"https://www.mrc-productivity.com/blog-staging-2021/wp-content/uploads/2015/07/hadoop-logo-300x210.png",
                    text:"  It is an open-source framework that is designed to provide massive storage for all kinds of data, process big data using MapReduce programming model, and solve problems involving massive amounts of data and computation across clusters of computers..",
  
                    },
                    two:{
                      head:'Apache Kafka',
                      img:"https://ih1.redbubble.net/image.859281471.5436/flat,750x1000,075,f.u2.jpg",
                      text:" It is an open-source event streaming platform written in Scala and Java. It is an abstraction of a distributed commit log and is capable of managing trillions of events in a day. We hold expertise in developing grade event streaming applications and data pipelines..",
    
                      },
                      three:{
                          head:'Apache Pig',
                          img:"https://e7.pngegg.com/pngimages/527/877/png-clipart-apache-pig-apache-hive-apache-hadoop-mapreduce-big-data-pig-logo-purple-mammal.png",
                          text:"  It is used to analyze larger data sets and our experts are well-versed with the know-how of the platform and offer the best-in-class service..",
        
                          },
                      four:{
                              head:'Apache Hive',
                              img:"https://www.matillion.com/wp-content/uploads/2019/11/Apache_Hive_logo.jpg",
                              text:"  Apache Hive is open-source data warehouse software built on top of Hadoop for querying, summarizing, and analyzing large datasets residing in distributed storage using a SQL-like interface. Using this service, SQL developers can also program Hive Query Language..",
            
                              },
                              five:{
                                  head:'NoSQL Database',
                                  img:"https://e7.pngegg.com/pngimages/482/981/png-clipart-mongodb-document-oriented-database-nosql-node-js-others-miscellaneous-leaf-thumbnail.png",
                                  text:" It is a non-relational database that eliminates the use of a fixed schema, omits joins, and is easily scalable. It is primarily used for big data and real-time web applications. We are specialized in managing the database architecture efficiently and offer technical consulting, services and support for the same..",
                
                                  },
                                  six:{
                                    head:'Apache ZooKeeper',
                                    img:"https://knowm.org/wp-content/uploads/2015/08/zookeeper-image.png",
                                    text:" It is an open-source project which helps to maintain distributed configuration service, naming registry for large distributed systems, synchronization service, and provide group services in a simple interface that prevents us from writing from scratch...",
                  
                                    },
                }
  
              }
        },
        {
            aws:{
                heading:'AWS SERVICES',
                headingpara:`“"`,
                image:"https://pythian.com/wp-content/uploads/2021/08/Partners_AWS_Level2.png",
                internal:{
                    one:{
                    head:'AWS Compute Services',
                    img:"https://magnumdigital.com.mx/wp-content/uploads/2021/01/EC2-570x570.gif",
                    text:"  Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment.Amazon EC2 reduces the time required to obtain and boot new server instances (called Amazon EC2 instances) to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers and system administrators the tools to build failure resilient applications and isolate themselves from common failure scenarios..",
  
                    },
                    two:{
                      head:'Storage Services',
                      img:"https://www.nicepng.com/png/detail/168-1682898_amazon-s3-logo.png",
                      text:"  Amazon s3 is storage for the Internet. It’s a simple storage service that offers softwaredevelopers a highly-scalable, reliable, and low-latency data storage infrastructure at very low costs. Amazon s3 provides a simple web services interface that can be used to store and retrieve any amount of data, at any time, from within Amazon Elastic Compute Cloud (Amazon EC2) or from anywhere on the web.. The number of objects you can store in an Amazon S3 bucket is virtually unlimited. Amazon S3 is also highly secure, supporting encryption at rest, and providing multiple mechanisms to provide fine-grained control of access to Amazon S3 resources.Amazon S3 is also highly scalable, allowing concurrentread or write access to Amazon S3 data by many separate clients or application threads. .",
    
                      },
                      three:{
                          head:'Networking Services',
                          img:"https://images.squarespace-cdn.com/content/v1/5500a991e4b0ed07e64029e1/1440981899556-JBE482LCQYUNAZE3RBLK/image-asset.png?format=750w",
                          text:"  Amazon Virtual Private Cloud is a networking service that you can use to establish boundaries around your AWS resources. It gives you full control over various network environments, resources, connectivity, and security. Moreover, it defines how a network should communicate across different Availability Zones or regions.VPC allows us to choose the virtual address of our private cloud and to define all of the VPC’s sub-constituents on our own, such as subnet, subnet mask, availability zone, and so on.When it comes to the technical description of VPC. It can be defined in an AWS region. And, as is well known, multiple availability zones exist within the region. It should be mentioned that VPC can be distributed throughout all availability zones within a region.  Amazon VPC is made up of various networking components. Here is Subnets,Route tables,Internet gateways,Elastic IP addresses,VPC endpoints,NAT,VPC peering.",
        
                          },
                      four:{
                              head:'Security Services',
                              img:"https://www.pngitem.com/pimgs/m/152-1522163_iam-aws-hd-png-download.png",
                              text:"  AWS Identity and Access Management (IAM) is a web service that helps you access AWS services and resources securely. IAM is the heart of AWS security because it enables you to control access by creating AWS users and groups, assigning special permissions and policies to particular users, setting up multi-factor authentication for additional security, and much more. IAM’s primary functionality in AWS is access and permissions. It provides two essential functions to establish basic security for enterprise resources – authentication and authorization.IAM provides the infrastructure necessary to control authentications and authorization. The IAM infrastructure includes principal, request, authentication, authorization, actions or operations, and resources..",
            
                              },
                              five:{
                                  head:'DevOps on AWS',
                                  img:"https://www.saashub.com/images/app/service_logos/16/a27d4e91523a/large.png?1538890814",
                                  text:"  AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates. CodePipeline automates the build, test, and deploy phases of your release process every time there is a code change, based on the release model you define. This enables you to rapidly and reliably deliver features and updates. You can easily integrate AWS CodePipeline with third-party services such as GitHub or with your own custom plugin. With AWS CodePipeline, you only pay for what you use. There are no upfront fees or long-term commitments..",
                
                                  },
                                  six:{
                                    head:'Monitoring and Mangement',
                                    img:"https://miro.medium.com/max/952/1*MCfXduPoNu63EzY_ywZvDw.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                                    seven:{
                                      head:'Database Services',
                                      img:"https://miro.medium.com/max/952/1*MCfXduPoNu63EzY_ywZvDw.png",
                                      text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                    
                                      },
                }
  
              },
            azure:{
                  heading:'Microsoft Azure',
                  headingpara:`“"`,
                  image:"",
                  internal:{
                    one:{
                    head:'IoT App Development',
                    img:"https://azurecomcdn.azureedge.net/cvt-b6532101d9ea03ed4ccb578c58428572829f7bc399aabc685c3d2ecfdb599189/svg/mariadb.svg",
                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
  
                    },
                    two:{
                      head:'IoT App Development',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
    
                      },
                      three:{
                          head:'IoT App Development',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
        
                          },
                      four:{
                              head:'IoT App Development',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
            
                              },
                              five:{
                                  head:'IoT App Development',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                
                                  },
                                  six:{
                                    head:'IoT App Development',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                }
    
                },
            gcp:{
                  heading:'IOT SERVICES',
                  headingpara:`“The IoT is big news because it ups the ante: 'Reach out and touch somebody' is becoming 'reach out and touch everything"`,
                  image:"https://www.mouser.com/empowering-innovation/portals/1/skins/Empowering-innovation/images/sensors-oneblock3.png",
                  internal:{
                    one:{
                    head:'IoT App Development',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
  
                    },
                    two:{
                      head:'IoT App Development',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
    
                      },
                      three:{
                          head:'IoT App Development',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
        
                          },
                      four:{
                              head:'IoT App Development',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
            
                              },
                              five:{
                                  head:'IoT App Development',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                
                                  },
                                  six:{
                                    head:'IoT App Development',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                }
    
                },
                virtualization:{
                  heading:'Virtualization',
                  headingpara:`“An open source, software-defined platform that virtualizes Linux® and Microsoft Windows workloads.."`,
                  image:"https://www.mouser.com/empowering-innovation/portals/1/skins/Empowering-innovation/images/sensors-oneblock3.png",
                  internal:{
                    one:{
                    head:'Network Virtualization',
                    img:"https://icon-library.com/images/connect-icon-png/connect-icon-png-20.jpg",
                    text:"  The ability to run multiple virtual networks with each has a separate control and data plan. It co-exists together on top of one physical network. It can be managed by individual parties that potentially confidential to each other. Network virtualization provides a facility to create and provision virtual networks—logical switches, routers, firewalls, load balancer, Virtual Private Network (VPN), and workload security within days or even in weeks .",
  
                    },
                    two:{
                      head:'Application Virtualization',
                      img:"https://www.parallels.com/blogs/ras/app/uploads/2019/02/application-virtualization-client.png",
                      text:" Application virtualization helps a user to have remote access of an application from a server. The server stores all personal information and other characteristics of the application but can still run on a local workstation through the internet. Example of this would be a user who needs to run two different versions of the same software. Technologies that use application virtualization are hosted applications and packaged applications .",
    
                      },
                      three:{
                          head:'Desktop Virtualization',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:" Desktop virtualization allows the users’ OS to be remotely stored on a server in the data centre. It allows the user to access their desktop virtually, from any location by a different machine. Users who want specific operating systems other than Windows Server will need to have a virtual desktop. Main benefits of desktop virtualization are user mobility, portability, easy management of software installation, updates, and patches.",
        
                          },
                      four:{
                              head:'Storage Virtualization',
                              img:"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2019/01/Application-virtualization.jpg",
                              text:" Storage virtualization is an array of servers that are managed by a virtual storage system. The servers aren’t aware of exactly where their data is stored, and instead function more like worker bees in a hive. It makes managing storage from multiple sources to be managed and utilized as a single repository. storage virtualization software maintains smooth operations, consistent performance and a continuous suite of advanced functions despite changes, break down and differences in the underlying equipment.",
            
                              },
                              five:{
                                  head:'Server Virtualization',
                                  img:"https://www.acecloudhosting.com/blog/wp-content/uploads/2014/11/Server-Virtualization.jpg",
                                  text:" This is a kind of virtualization in which masking of server resources takes place. Here, the central-server(physical server) is divided into multiple different virtual servers by changing the identity number, processors. So, each system can operate its own operating systems in isolate manner. Where each sub-server knows the identity of the central server. It causes an increase in the performance and reduces the operating cost by the deployment of main server resources into a sub-server resource.",
                
                                  },
                                  six:{
                                    head:'Data Virtualization',
                                    img:"imp :https://dv-website.s3.amazonaws.com/uploads/2018/11/ad_dvdenodo_111518.png",
                                    text:"  This is the kind of virtualization in which the data is collected from various sources and managed that at a single place without knowing more about the technical information like how data is collected, stored & formatted then arranged that data logically so that its virtual view can be accessed by its interested people and stakeholders, and users through the various cloud services remotely. Many big giant companies are providing their services like Oracle, IBM, At scale, Cdata, etc..",
                  
                                    },
                                 
                },
                subheadpart:`Virtualization is the fundamental technology that powers cloud computing. This software separates compute environments from physical infrastructures, so you can run multiple operating systems and applications simultaneously on the same machine.`
                },
                kubernetes:{
                  heading:'Kubernetes Solutions',
                  headingpara:`“Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications."`,
                  image:"https://cloudoki.com/content/images/2020/07/Kubernetes-Logo.wine.png",
                  internal:{
                    one:{
                    head:'Pod',
                    img:"https://res.cloudinary.com/practicaldev/image/fetch/s--xs-8Ol-z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nz0uuw6d6mkkfcguj4is.png",
                    text:"   It is a deployment unit in Kubernetes with a single Internet protocol address.Pods are the smallest, most basic deployable objects in Kubernetes. A Pod represents a single instance of a running process in your cluster. Pods contain one or more containers, such as Docker containers. When a Pod runs multiple containers, the containers are managed as a single entity and share the Pod's resources.",
  
                    },
                    two:{
                      head:'Horizontal Scaling',
                      img:"https://fr.sysdig.com/wp-content/uploads/2019/08/kubernetes_scaler_diagram.png",
                      text:"  It is an important feature in the Kubernetes. This feature uses a HorizontalPodAutoscalar to automatically increase or decrease the number of pods in a deployment, replication controller, replica set, or stateful set on the basis of observed CPU utilization.",
    
                      },
                      three:{
                          head:'Automated rollouts and rollbacks',
                          img:"https://www.evolven.com/images/stories/blog/blog_private_cloud_rollback_main.jpg",
                          text:"  Using the rollouts, Kubernetes distributes the changes and updates to an application or its configuration. If any problem occurs in the system, then this technique rollbacks those changes for you immediately..",
        
                          },
                      four:{
                              head:'Service Discovery and load balancing',
                              img:"https://cdn.wp.nginx.com/wp-content/uploads/2016/04/Richardson-microservices-part4-3_server-side-pattern.png",
                              text:" Kubernetes assigns the IP addresses and a Name of DNS for a set of containers, and also balances the load across them..",
            
                              },
                              five:{
                                  head:'Persistent Storage',
                                  img:"https://storpool.com/wp-content/uploads/2020/01/Use-cases-K8s.png",
                                  text:" Kubernetes provides an essential feature called 'persistent storage' for storing the data, which cannot be lost after the pod is killed or rescheduled. Kubernetes supports various storage systems for storing the data, such as Google Compute Engine's Persistent Disks (GCE PD) or Amazon Elastic Block Storage (EBS). It also provides the distributed file systems: NFS or GFS .",
                
                                  },
                                  six:{
                                    head:'Self-Healing',
                                    img:"https://35ijt023qwjf39obit3l17cm-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/Self-Healing-in-K8s.png",
                                    text:" This feature plays an important role in the concept of Kubernetes. Those containers which are failed during the execution process, Kubernetes restarts them automatically. And, those containers which do not reply to the user-defined health check, it stops them from working automatically. .",
                  
                                    },
                },
                subheadpart:`Kubernetes is an open-source Container Management tool which automates container deployment, container scaling, and descaling and container load balancing (also called as container orchestration tool). It is written in Golang and has a huge community because it was first developed by Google and later donated to CNCF (Cloud Native Computing Foundation). Kubernetes can group ‘n’ number of containers into one logical unit for managing and deploying them easily. It works brilliantly with all cloud vendors i.e. public, hybrid and on-premises.`
    
                },
            devops:{
                  
              heading:'DevOps Solutions',
              headingpara:`“Reduce Complexity And Shorten Release Cycles Of Application Delivery."`,
              image:"https://o.remove.bg/downloads/317c03f5-12b0-4c62-882f-d97342c289a0/images-removebg-preview.png",
                  internal:{
                    one:{
                      head:'Source Code Management',
                      img:"https://jts-mr.com/img/programming1_dark.png",
                      text:"  Source Code Management (SCM) is a critical software development tool designed to manage the strain that growing development costs exert on your business. It helps you track a running history of changes to a code base and helps resolve conflicts when merging updates from multiple contributors. SCM deploys industry-leading collaborative coding and version control tools such as GitLab, GitHub, and GitBucket, offering your developer teams full control over the coding process, especially in terms of code reviews, asset version control, collaboration and sharing..",
    
                      },
                      two:{
                        head:'Application Refactoring',
                        img:"https://www.impulsewash.com/wp-content/uploads/2018/07/5.png",
                        text:"  Refactoring is the process of running your applications on the infrastructure of your cloud migration services provider—meaning that you will need to completely re-architecture your applications to suit your new cloud environment better. It is a scientific process of taking existing code and incorporating improvements and upgrades while making code more readable, coherent, and clear. Application refactoring is also part of your cloud migration cycle, where you can add new features, spot and fix bugs, and even build large applications..",
      
                        },
                        three:{
                            head:'Static Code Analysis',
                            img:"https://blogger.googleusercontent.com/img/a/AVvXsEhOIrO6466y2pwHBDbC8LoXmE0gmuHE9fSVYEF9Ov7S8gS3CwdwYx-hn1OqCBiAqqeu8SP3k9kPwXajUaNlZwzUBQ-D0g_1yaYa9ZOYRrpEQK3XD5EqEsgRRmrWk0QSIEBrzfdsYk8K64YWVB2K0Riwq9D-FQmAKRDwEb78M2cUxBcpJ1tqGAJk6ikG=s320",
                            text:"  Static code analysis (SCA) is a method of debugging by examining source code before running a program. It mostly helps in detecting and highlighting any issues or bugs in the early stages of development, allowing developers to rectify them quickly and enabling them to develop a strong code base as a result. Value Point Systems offers customers’ DevOps teams the full power of working with preferred industry leading SCA tools such as SonarQube and Micro Focus Fortify, giving your team the skills to detect and fix bugs early, and to accelerate the development process..",
          
                            },
                        four:{
                                head:'Containerazation',
                                img:"https://miro.medium.com/max/512/1*SjXzIs2HZtJHUwqJgwox_A.png",
                                text:"  Kubernetes services provide a portable, scalable, open-source platform for managing containerized workloads—facilitating both declarative configuration and automation. Chief among the Kubernetes Services available today are: ClusterIP— exposes the service on a cluster-internal IP; NodePort—which exposes the service on each node’s IP at a static port; LoadBalancer— where the external load balancer routes to your NodePort and ClusterIP services, which are created automatically, and ExternalName, which maps the service to the contents of the ExternalName field..",
              
                                },
                                five:{
                                  head:'Continuous Integration and Continuous Deployment (CI/CD)',
                                  img:"https://www.iconsdb.com/icons/preview/orange/infinity-xxl.png",
                                  text:"  AWS provides a flexible set of DevOps Partner Solutions that extends from the development process to provisioning, deployment, and management. Value Point Systems offers your team of developers the complete range of AWS DevOps partner solutions that include CodeBuild, CodeDeploy, CodePipeline, CodeCommit, CodeArtifact, Beanstalk, Opsworks, X-Ray, and Elastic Beanstalk. These solutions can keep your DevOps team performance at its peak on a constant basis, raising the bar for your customer experience..",
                
                                  },
                                  six:{
                                    head:'AWS DevOps',
                                    img:"https://ezerus.com.au/wp-content/uploads/2019/05/aws-logo-aws-new-logo-album-on-imgur-ideas-300x300.png.webp",
                                    text:"  Cloud computing contracts are very different from regular IT outsourcing agreements. A cloud service contract sets out the legal basis upon which a customer for cloud-based services accesses and uses those services. These may be drawn up and agreed upon based on whether you engage the Managed Cloud Services Provider for a specific limited activity or short-term engagement, or if you hire their services for a more comprehensive scope of periodic work for say a year. Bases on these insights you can look for a short-term or annual contract with a trusted Value Point..",
                  
                                    },
                }
    
                }
        },
        {
            ITTraining:{
                heading:'Our Training',
                headingpara:`“ Improve the individual's level of awareness. "`,
                image:"",
                internal:{
                    one:{
                    head:'Technical Training',
                    img:"https://3.imimg.com/data3/IF/BW/MY-2943469/technical-training-250x250.jpeg",
                    text:"  .",
  
                    },
                    two:{
                      head:'Orientation Training',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  Orientation is the process of introducing new employees to their responsibilities, co-workers and workplace. An effective orientation training helps people feel more comfortable within their new roles, teams and departments, while also making them aware of company expectations and policies. Orientation allows new hires to ask questions or address any concerns. It also is intended to help them feel more comfortable in their roles..",
    
                      },
                      three:{
                          head:'Product Training',
                          img:"https://elearningfeeds.com/wp-content/uploads/2015/06/image_110290_1435374377-580x283.png",
                          text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
        
                          },
                      four:{
                              head:'Workplace Training',
                              img:"https://budgetgourmetmom.com/wp-content/uploads/2021/03/workforce-training-mylearnlogic-1.jpg",
                              text:" Workplace training is mutually beneficial for both organisations and employees. Training programs are tailored for specific requirements according to the needs of the organisation. The types of training available also depend on the issue being handled..",
            
                              },
                              five:{
                                  head:'Quality training',
                                  img:"https://mir-s3-cdn-cf.behance.net/projects/max_808/83fb4943163843.Y3JvcCw1MjYsNDExLDAsMTk.jpg",
                                  text:"  Training for Quality and TQM system the tarining supports can succeed only if there is accountability and responsibility for its implementation and effectiveness.",
                
                                  },
                                  six:{
                                    head:'Onboarding Training',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                }
  
              },
            Internships:{
                  heading:'Internships',
                  headingpara:`“Internships provide real-world experience to those looking to explore or gain the relevant knowledge and skills required to enter into a particular career field.."`,
                  image:"https://media.gettyimages.com/vectors/internship-infographic-with-8-steps-parts-options-vector-id670891742?s=612x612",
                  internal:{
                    one:{
                    head:'Paid Internships',
                    img:"https://www.thebalancecareers.com/thmb/WeIzHY_aLtVLv92PUXuzbca7ziI=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-499258438-58c4596e3df78c353cba8f1c.jpg",
                    text:"  We provide Paid internships exist primarily in the private sector or in large organizations that have the money to pay students to learn while they work. Given a choice of paid or unpaid internship, paid internships are definitely the internships of choice.More and more organizations are recognizing the value of internship programs and the enormous benefit they play in the recruitment process. As these organizations work to train interns, they are also scrutinizing them on all fronts to evaluate their potential as potential future full-time employees..",
  
                    },
                    two:{
                      head:'Summer Internships',
                      img:"https://www.thebalancecareers.com/thmb/w82qA1n6Bx_qo97-Y9t4U8DQA4E=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/business-meating--young-managers-working-with-diagrama-s-of-growth-944596176-5ad6517f1f4e130038c45f30.jpg",
                      text:"  We provide Summer internships are usually eight to twelve weeks long and can be full or part-time. More students do internships during the summer than during any other time of the year. These short-term experiences provide a real insight into what it’s actually like working in a particular job or career field. There’s ample time to get into a regular work routine and gain valuable knowledge and skills..",
    
                      },
                      three:{
                          head:'Internships for Credit',
                          img:"https://www.thebalancecareers.com/thmb/4elIPbeYKBJpfYm6GDQSBszPNyY=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/teenager-brainstorm-in-library-for-working-project-at-university--944008096-5ad6515118ba010037b99b1f.jpg",
                          text:"  We provide Internships for credit require that the experience is strongly related to an academic discipline to be deemed “credit-worthy”. The main question is determining the value of the internship experience in a higher education context. Internships that are primarily clerical or mechanical do not qualify for academic credit. Students looking to do an internship for credit usually need to have an academic sponsor to oversee and set criteria for the internship..",
        
                          },
                      four:{
                              head:'Unpaid Internships',
                              img:"https://www.thebalancecareers.com/thmb/vtjaxY1n03zAwo0WOUwUmALNan0=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/city-planners-working-in-office-944811300-5ad65087a474be0036adde77.jpg",
                              text:" We Provide Unpaid internships are temporary work arrangements that allow new or beginning professionals to observe a work environment and gain work experience without compensation. Typically, internships attract students who want to gain practical experience in their field, but professionals can also pursue unpaid internships.",
            
                              },
                              five:{
                                  head:'Virtual Internships',
                                  img:"",
                                  text:" We provide  “virtual internship,” which can be completed remotely. This means your intern can work from home rather than in the office. Virtual internships can be attractive to interns who value flexibility, and it can broaden your search to include talented interns outside of your area. This can be a natural fit for a company with many locations or many remote employees..",
                
                                  },
                                  six:{
                                    head:'Externships',
                                    img:"https://www.thebalancecareers.com/thmb/vntCf3FgHZnw5EYo25si-pZcqjw=/300x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/young-business-people-discussing-files-in-office-709137701-5ad652b4303713003766519f.jpg",
                                    text:" We provide Externships are very similar to internships but only of a much shorter duration. Another common name for externship is job shadowing. Although these opportunities may only consist of one day to several weeks, they tend to offer participants a bird’s eye view of what it’s actually like working in a particular career field as well as providing some professional contacts for future networking..",
                  
                                    },
                },
                subheadpart:`Internship is a great way to immerse yourself in a company’s culture to see if you fit well in the company and whether that company will help you get closer to your career goals.Through internships, students receive a hands-on opportunity to work in their desired field of study. By doing so, students learn how their course of study applies to the real world. It enables them to gain an immensely valuable experience that strengthens their profiles, thereby making them stronger candidates for prospective jobs in their core domains.`
                },
            ITCertificaton:{
                  heading:'',
                  headingpara:`“The IoT is big news because it ups the ante: 'Reach out and touch somebody' is becoming 'reach out and touch everything"`,
                  image:"https://www.mouser.com/empowering-innovation/portals/1/skins/Empowering-innovation/images/sensors-oneblock3.png",
                  internal:{
                    one:{
                    head:'IoT App Development',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
  
                    },
                    two:{
                      head:'IoT App Development',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
    
                      },
                      three:{
                          head:'IoT App Development',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
        
                          },
                      four:{
                              head:'IoT App Development',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
            
                              },
                              five:{
                                  head:'IoT App Development',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                
                                  },
                                  six:{
                                    head:'IoT App Development',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                }
    
                },
            jobsupport:{
                  heading:'',
                  headingpara:`“The IoT is big news because it ups the ante: 'Reach out and touch somebody' is becoming 'reach out and touch everything"`,
                  image:"https://www.mouser.com/empowering-innovation/portals/1/skins/Empowering-innovation/images/sensors-oneblock3.png",
                  internal:{
                    one:{
                    head:'Communication Skills',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:" We provide the coomunication skills to the candidates, Communication skills are critical to success in any job. Even if you work remotely or on projects independent from the rest of your department, you will, eventually, have to engage with other people. At this point, you’ll be reminded about the value of excellent communication skills, and the role they play in building networks, resolving conflict and managing both challenging and stressful workplace situations..",
  
                    },
                    two:{
                      head:'Problem Solving Skills',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  .",
    
                      },
                      three:{
                          head:'Team work and Collaboration Skills',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
        
                          },
                      four:{
                              head:'Project Management Skills',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
            
                              },
                              five:{
                                  head:'Punctuality',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  Punctuality and good time management are skills demanded by employers across all industries. That’s because being late has the ability to negatively affect whole teams, disrupting meetings and giving yourself and others a reputation for being unprofessional. While it might be a big shift to how you organise and manage your life, learning to be punctual will benefit your career immensely. Here are our tips on how to improve your punctuality..",
                
                                  },
                                  six:{
                                    head:'Work ethic',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                },
                subheadpart:`We provide IT Job Support maintains the computer networks of all types of organisations, providing technical support and ensuring the whole company runs smoothly. IT Support monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues as they arise. Because of the nature of the job, some companies may require their IT Support to undertake shift work.

                `
                },
            itprojects:{
                  heading:'',
                  headingpara:`“A projectis a set of interrelatedactions and aimed at achievingresultstotransformorimprove a situation in a limited time and withbudgetedresources."`,
                  image:"",
                  internal:{
                    one:{
                    head:'Development Projects',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:"  Development Projects are Unique,Ongoing and designed projects.Unique projects. They are one-off, begin and end in them selves designed to achieve not repetitive objectives.Ongoing projects. They are repetitive designed to produce or achieve similar goals.",
  
                    },
                    two:{
                      head:'Extension Projects',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  Extension Projects are Long term, Medium term and Short term. Long term Periods exceeding three years, Medium term Periods between one and three years,Short term Periods under 1 year",
    
                      },
                      three:{
                          head:'Services Project',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:" service project.",
        
                          },
                      four:{
                              head:'Production Project',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
            
                              },
                              five:{
                                  head:'',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                
                                  },
                                  six:{
                                    head:'Strategical Project',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  Long-termed It affects the organization structure They are qualitative (coverage, integration, image).",
                  
                                    },
                }
    
                },
                sponsoredprojects:{
                  heading:'',
                  headingpara:`“Determine whether funding received from an external source (the "sponsor" or "donor") is considered a gift or a sponsored project, for proper management of funds."`,
                  image:"",
                  internal:{
                    one:{
                    head:'Detailed Statement of Work',
                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                    text:"  Sponsored projects are typically awarded in response to a detailed statement of work and commitment to a specific line of scholarly or scientific inquiry that typically follows a plan.",
  
                    },
                    two:{
                      head:'Detailed Budget & Fiscal Accountability',
                      img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                      text:"  A sponsored project agreement usually includes detailed financial accountability.Any funding provided by a foreign government, including funding from intermediary organizations primarily funded by a foreign government is a sponsored project.",
    
                      },
                      three:{
                          head:'Disposition of Properties ("Deliverables").',
                          img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                          text:"  Sponsored project agreements usually include terms and conditions for the disposition of tangible properties (e.g., equipment, material, detailed data records, specified technical reports) or intangible properties (e.g., rights in data, intellectual property, copyrights, invention ownership, technology licensing).",
        
                          },
                      four:{
                              head:'Imposition of Legal Accountability.',
                              img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                              text:" Sponsored project agreements may impose terms of legal accountability designed to ensure the work intended by the sponsor is satisfactorily executed by the University. Such terms include but are not limited to indemnification, audit rights, hold harmless clauses, arbitration requirements, confidentiality, and non-disclosure agreements.",
            
                              },
                              five:{
                                  head:'Project Sponsorship',
                                  img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                  text:"  The project sponsor is the person responsible for the overall success of the project, including appointing the project manager and team, defining success criteria, and ensuring the successful delivery of the project.",
                
                                  },
                                  six:{
                                    head:'',
                                    img:"https://dashtechinc.com/wp-content/uploads/2020/01/IoT-Hero-Banner.png",
                                    text:"  We create powerful IoT-based applications that facilitate seamless connectivity between the physical and the digital. Our expert solutions are capable of creating connected products as well as converting the standalone products into smart ones which are capable of doing more.",
                  
                                    },
                }
    
                },
            ittraining:{
                  heading:'',
                  headingpara:`“"`,
                  image:"",
                  internal:{
                    one:{
                    head:'',
                    img:"",
                    text:"  .",
  
                    },
                    two:{
                      head:'',
                      img:"",
                      text:"  .",
    
                      },
                      three:{
                          head:'',
                          img:"",
                          text:"  .",
        
                          },
                      four:{
                              head:'',
                              img:"",
                              text:"  .",
            
                              },
                              five:{
                                  head:'',
                                  img:"",
                                  text:"  .",
                
                                  },
                                  six:{
                                    head:'',
                                    img:"",
                                    text:"  .",
                  
                                    },
                }
    
                }

        }
    ]
  return (
    <div>
         <Routes>
            <Route path="services/IOT%20Services" element={<Aws data={infoall[0].iot}/>}/>
            <Route path="services/Cloud%20Services" element={<Aws data={infoall[0].cloud}/>}/>
            <Route path="services/Network%20Services" element={<Aws data={infoall[0].network}/>}/>
            <Route path="services/Data%20Services" element={<Aws data={infoall[0].data}/>}/>
            <Route path="services/Web%20Development" element={<Aws data={infoall[0].web}/>}/>
            <Route path="services/IT%20Consulting%20Services" element={<Aws data={infoall[0].consulting}/>}/>
             


            <Route path="support/AWS" element={<Aws data={infoall[1].aws}/>}/>
            <Route path="support/AZURE" element={<Aws data={infoall[1].azure}/>}/>
            <Route path="support/GCP" element={<Aws data={infoall[1].gcp}/>}/>
            <Route path="support/DevOps" element={<Aws data={infoall[1].devops}/>}/>
            <Route path="support/Virtualization" element={<Aws data={infoall[1].virtualization}/>}/>
            <Route path="support/Kubernetes" element={<Aws data={infoall[1].kubernetes}/>}/>
            <Route path="support/Virtualization" element={<Aws data={infoall[1].consulting}/>}/>





            <Route path="training/IT%20Training" element={<Aws data={infoall[2].ittraining}/>}/>
            <Route path="training/Internships" element={<Aws data={infoall[2].Internships}/>}/>
            <Route path="training/IT%20Certification" element={<Aws data={infoall[2].ITCertificaton}/>}/>
            <Route path="training/IT%20projects" element={<Aws data={infoall[2].itprojects}/>}/>
            <Route path="training/Sponsored%20projects" element={<Aws data={infoall[2].sponsoredprojects}/>}/>
            <Route path="training/Job%20support" element={<Aws data={infoall[2].jobsupport}/>}/>
         </Routes> 
         
    </div>
  )
}
