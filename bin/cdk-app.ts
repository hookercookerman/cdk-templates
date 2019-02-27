#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/cdk");
import { CdkStack } from "../lib/stacks/cdk-stack";
import { CdkPipelineStack } from "../lib/stacks/cdk-pipeline-stack";

const app = new cdk.App();
new CdkStack(app, "CdkStack");
new CdkPipelineStack(app, "CdkPipelineStack");
app.run();