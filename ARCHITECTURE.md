# Architecture: Ayeixa Sentience & Cleanliness Eval

## Overview
Sentience Eval provides automated assertion filters to prevent conversational agent regressions and raw JSON leaks.

## System Topology
```mermaid
flowchart TD
    Output["Agent Text Output"] --> JsonDetector["Raw JSON Leak Detector"]
    Output --> Hallucination["Hallucination & Factual Grounding"]
    Output --> Cleanliness["Behavioral Cleanliness Suite"]
    JsonDetector & Hallucination & Cleanliness --> Benchmark["Benchmark Aggregator & Score Engine"]
```
