
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arkan Tandel | Cloud & DevOps Engineer</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* Hero Section */
        .hero { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 100px 0; text-align: center; }
        .hero h1 { font-size: 3.5rem; font-weight: 700; margin-bottom: 20px; }
        .hero .subtitle { font-size: 1.3rem; margin-bottom: 10px; opacity: 0.9; }
        .hero .role { font-size: 1.1rem; color: #94a3b8; margin-bottom: 30px; }
        .hero .btn { display: inline-block; background: #06b6d4; color: white; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .hero .btn:hover { background: #0891b2; transform: translateY(-2px); }
        
        /* Stats */
        .stats { display: flex; justify-content: center; gap: 50px; padding: 60px 0; background: #f8fafc; }
        .stat { text-align: center; }
        .stat-number { font-size: 2.5rem; font-weight: 700; color: #0f172a; }
        .stat-label { color: #64748b; font-size: 1rem; }
        
        /* Skills */
        .skills { padding: 80px 0; background: white; }
        .section-title { text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: #0f172a; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
        .skill-card { text-align: center; padding: 40px 20px; border-radius: 20px; background: #f1f5f9; transition: all 0.3s; }
        .skill-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .skill-icon { font-size: 3rem; color: #06b6d4; margin-bottom: 20px; }
        .skill-title { font-size: 1.3rem; font-weight: 600; margin-bottom: 10px; }
        
        /* Projects */
        .projects { padding: 80px 0; background: #f8fafc; }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
        .project-card { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: all 0.3s; }
        .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        .project-image { height: 200px; background: linear-gradient(45deg, #06b6d4, #3b82f6); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem; }
        .project-content { padding: 30px; }
        .project-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 15px; color: #0f172a; }
        .project-desc { color: #64748b; margin-bottom: 20px; }
        .project-tech { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
        .tech-tag { background: #e2e8f0; padding: 5px 15px; border-radius: 20px; font-size: 0.85rem; }
        .project-impact { font-weight: 600; color: #059669; }
        
        /* Experience */
        .experience { padding: 80px 0; background: white; }
        .timeline { max-width: 800px; margin: 0 auto; position: relative; }
        .timeline::before { content: ''; position: absolute; left: 50%; transform: translateX(-50%); width: 4px; height: 100%; background: #e2e8f0; }
        .timeline-item { display: flex; margin-bottom: 60px; position: relative; }
        .timeline-item:nth-child(odd) { justify-content: flex-end; padding-left: 0; padding-right: 60px; }
        .timeline-item:nth-child(even) { justify-content: flex-start; padding-right: 0; padding-left: 60px; }
        .timeline-content { background: #f8fafc; padding: 30px; border-radius: 15px; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); position: relative; }
        .timeline-date { font-weight: 600; color: #06b6d4; margin-bottom: 10px; }
        .timeline-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 10px; }
        .timeline-company { color: #64748b; margin-bottom: 15px; }
        
        /* Contact */
        .contact { padding: 80px 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; text-align: center; }
        .contact-links { display: flex; justify-content: center; gap: 30px; margin-top: 30px; flex-wrap: wrap; }
        .contact-link { color: white; font-size: 1.5rem; transition: all 0.3s; }
        .contact-link:hover { color: #06b6d4; transform: translateY(-3px); }
        
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .stats { flex-direction: column; gap: 30px; }
            .timeline::before { left: 20px; }
            .timeline-item { flex-direction: column; padding-left: 50px !important; padding-right: 0 !important; }
            .timeline-content { max-width: 100%; margin-left: 0; }
        }
    </style>
</head>
<body>
    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <h1>Arkan Tandel</h1>
            <p class="subtitle">Cloud & DevOps Engineer</p>
            <p class="role">Pune, Maharashtra | Building scalable AWS infrastructure with Terraform, Kubernetes & CI/CD</p>
            <a href="#projects" class="btn">View My Work</a>
        </div>
    </section>

    <!-- Stats -->
    <section class="stats">
        <div class="stat">
            <div class="stat-number">35%</div>
            <div class="stat-label">Infrastructure Setup Reduction</div>
        </div>
        <div class="stat">
            <div class="stat-number">60%</div>
            <div class="stat-label">Deployment Time Reduction</div>
        </div>
        <div class="stat">
            <div class="stat-number">3+</div>
            <div class="stat-label">Production Projects</div>
        </div>
    </section>

    <!-- Skills -->
    <section class="skills">
        <div class="container">
            <h2 class="section-title">Core Technologies</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon"><i class="fab fa-aws"></i></div>
                    <div class="skill-title">AWS</div>
                    <div>EC2, EKS, VPC, S3, Lambda, RDS</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fas fa-cube"></i></div>
                    <div class="skill-title">IaC</div>
                    <div>Terraform, CloudFormation, Ansible</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fab fa-docker"></i></div>
                    <div class="skill-title">Containers</div>
                    <div>Docker, Kubernetes, EKS, ECS</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fas fa-code-branch"></i></div>
                    <div class="skill-title">CI/CD</div>
                    <div>Jenkins, GitHub Actions, ArgoCD</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="skill-title">Observability</div>
                    <div>Prometheus, Grafana, CloudWatch</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fas fa-database"></i></div>
                    <div class="skill-title">Databases</div>
                    <div>RDS, DynamoDB, PostgreSQL, Redis</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section class="projects" id="projects">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <div class="project-image"><i class="fas fa-cloud"></i></div>
                    <div class="project-content">
                        <h3 class="project-title">Production-Ready AWS EKS Cluster</h3>
                        <p class="project-desc">Deployed EKS cluster across 3 AZs with private VPC, zero-downtime deployments, and auto-scaling.</p>
                        <div class="project-tech">
                            <span class="tech-tag">AWS EKS</span>
                            <span class="tech-tag">Kubernetes</span>
                            <span class="tech-tag">Docker</span>
                            <span class="tech-tag">Terraform</span>
                            <span class="tech-tag">CloudWatch</span>
                        </div>
                        <div class="project-impact">Zero single point of failure • HPA auto-scaling 3→20 pods</div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image"><i class="fas fa-network-wired"></i></div>
                    <div class="project-content">
                        <h3 class="project-title">Terraform Secure 3-Tier VPC</h3>
                        <p class="project-desc">Designed secure 3-tier AWS VPC architecture with public/private subnets, NAT Gateway, and security groups.</p>
                        <div class="project-tech">
                            <span class="tech-tag">AWS VPC</span>
                            <span class="tech-tag">Terraform</span>
                            <span class="tech-tag">EC2</span>
                            <span class="tech-tag">Security Groups</span>
                        </div>
                        <div class="project-impact">Multi-AZ high availability • Least-privilege access</div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image"><i class="fas fa-server"></i></div>
                    <div class="project-content">
                        <h3 class="project-title">Ansible 3-Tier Architecture</h3>
                        <p class="project-desc">Orchestrated complete 3-tier Web/App/DB stack across EC2 instances with Docker containerization.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Ansible</span>
                            <span class="tech-tag">Docker</span>
                            <span class="tech-tag">AWS EC2</span>
                            <span class="tech-tag">Nginx</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                        <div class="project-impact">35% faster setup • 80% less manual work</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience -->
    <section class="experience">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-content">
                        <div class="timeline-date">Jan 2026 - May 2026</div>
                        <h3 class="timeline-title">Cloud & DevOps Intern</h3>
                        <div class="timeline-company">Crevita Technology Pvt. Ltd.</div>
                        <ul style="color: #475569; margin-top: 10px;">
                            <li>Managed AWS infrastructure (EC2, S3, IAM)</li>
                            <li>Built CI/CD pipelines with Jenkins</li>
                            <li>Reduced deployment time by 60%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section class="contact">
        <div class="container">
            <h2 class="section-title" style="color: white;">Let's Connect</h2>
            <p style="max-width: 600px; margin: 0 auto 30px;">Open to Cloud/DevOps opportunities in Pune | arkantandel@gmail.com | +91 752574441</p>
            <div class="contact-links">
                <a href="https://linkedin.com/in/arkantandel" class="contact-link" target="_blank" title="LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/arkantandel" class="contact-link" target="_blank" title="GitHub">
                    <i class="fab fa-github"></i>
                </a>
                <a href="mailto:arkantandel@gmail.com" class="contact-link" title="Email">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="tel:+91752574441" class="contact-link" title="Phone">
                    <i class="fas fa-phone"></i>
                </a>
            </div>
            <p style="margin-top: 40px; opacity: 0.7;">© 2026 Arkan Tandel. Built with ❤️ for Cloud & DevOps.</p>
        </div>
    </section>
</body>
</html>
