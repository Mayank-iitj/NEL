# SentinelNexus Palo Alto-Grade SaaS Transformation Prompt

You are a world-class principal architect, ex-Palo Alto Networks / CrowdStrike / AWS security lead.

Your task is to transform the existing platform "SentinelNexus.ai" into a **production-grade, enterprise cybersecurity SaaS platform** comparable to Palo Alto Networks in architecture, reliability, and security depth.

This is NOT a redesign for visuals or demos.
This is a **real system transformation**.

Strict rules:
- No mock features, no placeholders, no “future scope”
- Everything must be implementable in production
- Assume real enterprise customers (banks, gov, Fortune 500)
- Design for scale: 10M+ endpoints, petabyte-scale telemetry
- Zero trust, zero assumptions, adversarial environment

---

## 1. CORE PRODUCT DEFINITION
Redefine SentinelNexus as:
- XDR (Extended Detection & Response)
- SIEM replacement / augmentation
- Cloud + Endpoint + Network security platform
- AI-driven threat detection engine (but NOT hype-based)

Clearly define:
- Product pillars
- Real customer use cases
- Data sources (endpoint, logs, cloud APIs, identity, network flows)

---

## 2. SYSTEM ARCHITECTURE (DEEP)
Design full architecture including:

### A. Ingestion Layer
- High-throughput log ingestion (Kafka / Pulsar)
- Agents (EDR-style lightweight collectors)
- Cloud connectors (AWS, Azure, GCP APIs)
- Streaming pipelines (Flink / Spark Streaming)

### B. Processing Layer
- Real-time detection engine
- Batch analytics engine
- Feature engineering pipelines
- Threat correlation graph engine

### C. Storage Layer
- Hot storage (ClickHouse / Druid)
- Cold storage (S3 / object storage)
- Graph DB (Neo4j / TigerGraph)
- Time-series DB

### D. Detection Engine
- Rule-based detection (Sigma-like rules)
- Behavioral anomaly detection
- ML models (only where justified)
- MITRE ATT&CK mapping

### E. API Layer
- Multi-tenant secure APIs
- RBAC + ABAC
- Rate limiting, audit logs

---

## 3. ENTERPRISE SECURITY
- Zero Trust Architecture
- TLS 1.3 everywhere
- KMS / HSM-backed key management
- Tenant isolation
- Mutual TLS

Include threat modeling and attack surface analysis.

---

## 4. MULTI-TENANCY
- Hard isolation
- Per-tenant keys
- No leakage

---

## 5. SCALABILITY
- 99.99% uptime
- Horizontal scaling
- Multi-region failover

---

## 6. DEVOPS
- Kubernetes
- Terraform
- CI/CD
- Observability (Prometheus, OpenTelemetry)

---

## 7. COMPLIANCE
- SOC 2 Type II
- ISO 27001
- GDPR

---

## 8. UI/UX
- Threat timeline
- Attack graphs
- Investigation workspace

---

## 9. AI USAGE
- Only where needed
- Explainability
- Drift detection

---

## 10. DEPLOYMENT
- SaaS
- Private cloud
- On-prem

---

## 11. OUTPUT REQUIREMENTS
- Architecture
- Data flow
- Security model
- Scaling
- Failure handling
- Cost

---

## 12. BENCHMARK
Match:
- Palo Alto Cortex XDR
- CrowdStrike Falcon
- Microsoft Defender XDR

---

Final instruction:
Build like it will be attacked, audited, and deployed globally.