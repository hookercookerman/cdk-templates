import cdk = require("@aws-cdk/cdk")
import lambda = require("@aws-cdk/aws-lambda")

export class LambdaFunctionCreator {
  /**
   * Create Lambda Function
   * @param {cdk.Construct} self
   * @param {String} functionName
   * @param {String} handler
   * @param {String} codeDirectory
   */
  static CreateLambdaFunction(
    self: cdk.Construct,
    functionName: string,
    codeDirectory: string,
    handler: string
  ) {
    return new lambda.Function(self, functionName, {
      functionName: functionName,
      runtime: lambda.Runtime.Nodejs10x,
      code: lambda.Code.asset(codeDirectory),
      handler: handler,
      memorySize: 256,
      timeout: 300,
      environment: {
        TZ: "Asia/Tokyo"
      }
    })
  }

  static CreatePythonRuntimeLambdaFunction(self: cdk.Construct, functionName: string, handler: string) {
    return new lambda.Function(self, functionName, {
      functionName: functionName,
      runtime: lambda.Runtime.Python37,
      code: lambda.Code.asset("resources/python"),
      handler: handler,
      memorySize: 256,
      timeout: 29,
      environment: {
        TZ: "Asia/Tokyo"
      }
    })
  }
}
