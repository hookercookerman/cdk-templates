#!/usr/bin/env node
import "source-map-support/register"
import cdk = require("@aws-cdk/core")
import { CdkStack } from "../lib/stacks/cdk-stack"
import { CdkAppSync } from "../lib/stacks/cdk_appsync"
import { CdkAPILambda } from "../lib/stacks/cdk_api_lambda"
import { CdkStreamLambda } from "../lib/stacks/cdk_stream_lambda"
import { CdkIoTDynamo } from "../lib/stacks/cdk_iot_dynamo"
import { CdkIoTLambda } from "../lib/stacks/cdk_iot_lambda"
import { LambdaAuthorizer } from "../lib/stacks/lambda_authorizer"

const app: cdk.App = new cdk.App()
const stack = new CdkStack(app, "CdkStack")
const stask_hoge = new CdkAppSync(app, "CdkAppSync")
stask_hoge.addDependency(stack)
new CdkAPILambda(app, "CdkAPILambda")
new CdkStreamLambda(app, "CdkStreamLambda")
new CdkIoTDynamo(app, "CdkIoTDynamo")
new CdkIoTLambda(app, "CdkIoTLambda")
new LambdaAuthorizer(app, "LambdaAuthorizer")
app.synth()
