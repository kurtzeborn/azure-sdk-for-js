/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const Attributes: coreHttp.CompositeMapper = {
  serializedName: "Attributes",
  type: {
    name: "Composite",
    className: "Attributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      notBefore: {
        serializedName: "nbf",
        type: {
          name: "UnixTime"
        }
      },
      expires: {
        serializedName: "exp",
        type: {
          name: "UnixTime"
        }
      },
      created: {
        readOnly: true,
        serializedName: "created",
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        readOnly: true,
        serializedName: "updated",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const CertificateAttributes: coreHttp.CompositeMapper = {
  serializedName: "CertificateAttributes",
  type: {
    name: "Composite",
    className: "CertificateAttributes",
    modelProperties: {
      ...Attributes.type.modelProperties,
      recoverableDays: {
        readOnly: true,
        serializedName: "recoverableDays",
        type: {
          name: "Number"
        }
      },
      recoveryLevel: {
        nullable: false,
        readOnly: true,
        serializedName: "recoveryLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CertificateItem: coreHttp.CompositeMapper = {
  serializedName: "CertificateItem",
  type: {
    name: "Composite",
    className: "CertificateItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      x509Thumbprint: {
        serializedName: "x5t",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const CertificateIssuerItem: coreHttp.CompositeMapper = {
  serializedName: "CertificateIssuerItem",
  type: {
    name: "Composite",
    className: "CertificateIssuerItem",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const KeyProperties: coreHttp.CompositeMapper = {
  serializedName: "KeyProperties",
  type: {
    name: "Composite",
    className: "KeyProperties",
    modelProperties: {
      exportable: {
        serializedName: "exportable",
        type: {
          name: "Boolean"
        }
      },
      keyType: {
        serializedName: "kty",
        type: {
          name: "String"
        }
      },
      keySize: {
        serializedName: "key_size",
        type: {
          name: "Number"
        }
      },
      reuseKey: {
        serializedName: "reuse_key",
        type: {
          name: "Boolean"
        }
      },
      curve: {
        serializedName: "crv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretProperties: coreHttp.CompositeMapper = {
  serializedName: "SecretProperties",
  type: {
    name: "Composite",
    className: "SecretProperties",
    modelProperties: {
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubjectAlternativeNames: coreHttp.CompositeMapper = {
  serializedName: "SubjectAlternativeNames",
  type: {
    name: "Composite",
    className: "SubjectAlternativeNames",
    modelProperties: {
      emails: {
        serializedName: "emails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      dnsNames: {
        serializedName: "dns_names",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      upns: {
        serializedName: "upns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const X509CertificateProperties: coreHttp.CompositeMapper = {
  serializedName: "X509CertificateProperties",
  type: {
    name: "Composite",
    className: "X509CertificateProperties",
    modelProperties: {
      subject: {
        serializedName: "subject",
        type: {
          name: "String"
        }
      },
      ekus: {
        serializedName: "ekus",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      subjectAlternativeNames: {
        serializedName: "sans",
        type: {
          name: "Composite",
          className: "SubjectAlternativeNames"
        }
      },
      keyUsage: {
        serializedName: "key_usage",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      validityInMonths: {
        serializedName: "validity_months",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Trigger: coreHttp.CompositeMapper = {
  serializedName: "Trigger",
  type: {
    name: "Composite",
    className: "Trigger",
    modelProperties: {
      lifetimePercentage: {
        serializedName: "lifetime_percentage",
        constraints: {
          InclusiveMaximum: 99,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      daysBeforeExpiry: {
        serializedName: "days_before_expiry",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Action: coreHttp.CompositeMapper = {
  serializedName: "Action",
  type: {
    name: "Composite",
    className: "Action",
    modelProperties: {
      actionType: {
        serializedName: "action_type",
        type: {
          name: "Enum",
          allowedValues: ["EmailContacts", "AutoRenew"]
        }
      }
    }
  }
};

export const LifetimeAction: coreHttp.CompositeMapper = {
  serializedName: "LifetimeAction",
  type: {
    name: "Composite",
    className: "LifetimeAction",
    modelProperties: {
      trigger: {
        serializedName: "trigger",
        type: {
          name: "Composite",
          className: "Trigger"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "Composite",
          className: "Action"
        }
      }
    }
  }
};

export const IssuerParameters: coreHttp.CompositeMapper = {
  serializedName: "IssuerParameters",
  type: {
    name: "Composite",
    className: "IssuerParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      certificateType: {
        serializedName: "cty",
        type: {
          name: "String"
        }
      },
      certificateTransparency: {
        serializedName: "cert_transparency",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CertificatePolicy: coreHttp.CompositeMapper = {
  serializedName: "CertificatePolicy",
  type: {
    name: "Composite",
    className: "CertificatePolicy",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      keyProperties: {
        serializedName: "key_props",
        type: {
          name: "Composite",
          className: "KeyProperties"
        }
      },
      secretProperties: {
        serializedName: "secret_props",
        type: {
          name: "Composite",
          className: "SecretProperties"
        }
      },
      x509CertificateProperties: {
        serializedName: "x509_props",
        type: {
          name: "Composite",
          className: "X509CertificateProperties"
        }
      },
      lifetimeActions: {
        serializedName: "lifetime_actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LifetimeAction"
            }
          }
        }
      },
      issuerParameters: {
        serializedName: "issuer",
        type: {
          name: "Composite",
          className: "IssuerParameters"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      }
    }
  }
};

export const CertificateBundle: coreHttp.CompositeMapper = {
  serializedName: "CertificateBundle",
  type: {
    name: "Composite",
    className: "CertificateBundle",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      kid: {
        readOnly: true,
        serializedName: "kid",
        type: {
          name: "String"
        }
      },
      sid: {
        readOnly: true,
        serializedName: "sid",
        type: {
          name: "String"
        }
      },
      x509Thumbprint: {
        readOnly: true,
        serializedName: "x5t",
        type: {
          name: "Base64Url"
        }
      },
      policy: {
        readOnly: true,
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "CertificatePolicy"
        }
      },
      cer: {
        serializedName: "cer",
        type: {
          name: "ByteArray"
        }
      },
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DeletedCertificateBundle: coreHttp.CompositeMapper = {
  serializedName: "DeletedCertificateBundle",
  type: {
    name: "Composite",
    className: "DeletedCertificateBundle",
    modelProperties: {
      ...CertificateBundle.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        readOnly: true,
        serializedName: "deletedDate",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const DeletedCertificateItem: coreHttp.CompositeMapper = {
  serializedName: "DeletedCertificateItem",
  type: {
    name: "Composite",
    className: "DeletedCertificateItem",
    modelProperties: {
      ...CertificateItem.type.modelProperties,
      recoveryId: {
        serializedName: "recoveryId",
        type: {
          name: "String"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "UnixTime"
        }
      },
      deletedDate: {
        readOnly: true,
        serializedName: "deletedDate",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      innerError: {
        readOnly: true,
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};

export const CertificateOperation: coreHttp.CompositeMapper = {
  serializedName: "CertificateOperation",
  type: {
    name: "Composite",
    className: "CertificateOperation",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      issuerParameters: {
        serializedName: "issuer",
        type: {
          name: "Composite",
          className: "IssuerParameters"
        }
      },
      csr: {
        serializedName: "csr",
        type: {
          name: "ByteArray"
        }
      },
      cancellationRequested: {
        serializedName: "cancellation_requested",
        type: {
          name: "Boolean"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      statusDetails: {
        serializedName: "status_details",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      requestId: {
        serializedName: "request_id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IssuerCredentials: coreHttp.CompositeMapper = {
  serializedName: "IssuerCredentials",
  type: {
    name: "Composite",
    className: "IssuerCredentials",
    modelProperties: {
      accountId: {
        serializedName: "account_id",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "pwd",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdministratorDetails: coreHttp.CompositeMapper = {
  serializedName: "AdministratorDetails",
  type: {
    name: "Composite",
    className: "AdministratorDetails",
    modelProperties: {
      firstName: {
        serializedName: "first_name",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "last_name",
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OrganizationDetails: coreHttp.CompositeMapper = {
  serializedName: "OrganizationDetails",
  type: {
    name: "Composite",
    className: "OrganizationDetails",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      adminDetails: {
        serializedName: "admin_details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AdministratorDetails"
            }
          }
        }
      }
    }
  }
};

export const IssuerAttributes: coreHttp.CompositeMapper = {
  serializedName: "IssuerAttributes",
  type: {
    name: "Composite",
    className: "IssuerAttributes",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      created: {
        readOnly: true,
        serializedName: "created",
        type: {
          name: "UnixTime"
        }
      },
      updated: {
        readOnly: true,
        serializedName: "updated",
        type: {
          name: "UnixTime"
        }
      }
    }
  }
};

export const IssuerBundle: coreHttp.CompositeMapper = {
  serializedName: "IssuerBundle",
  type: {
    name: "Composite",
    className: "IssuerBundle",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "IssuerCredentials"
        }
      },
      organizationDetails: {
        serializedName: "org_details",
        type: {
          name: "Composite",
          className: "OrganizationDetails"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "IssuerAttributes"
        }
      }
    }
  }
};

export const Contact: coreHttp.CompositeMapper = {
  serializedName: "Contact",
  type: {
    name: "Composite",
    className: "Contact",
    modelProperties: {
      emailAddress: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Contacts: coreHttp.CompositeMapper = {
  serializedName: "Contacts",
  type: {
    name: "Composite",
    className: "Contacts",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      contactList: {
        serializedName: "contacts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Contact"
            }
          }
        }
      }
    }
  }
};

export const CertificateCreateParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateCreateParameters",
  type: {
    name: "Composite",
    className: "CertificateCreateParameters",
    modelProperties: {
      certificatePolicy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "CertificatePolicy"
        }
      },
      certificateAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CertificateImportParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateImportParameters",
  type: {
    name: "Composite",
    className: "CertificateImportParameters",
    modelProperties: {
      base64EncodedCertificate: {
        required: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "pwd",
        type: {
          name: "String"
        }
      },
      certificatePolicy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "CertificatePolicy"
        }
      },
      certificateAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CertificateUpdateParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateUpdateParameters",
  type: {
    name: "Composite",
    className: "CertificateUpdateParameters",
    modelProperties: {
      certificatePolicy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "CertificatePolicy"
        }
      },
      certificateAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CertificateMergeParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateMergeParameters",
  type: {
    name: "Composite",
    className: "CertificateMergeParameters",
    modelProperties: {
      x509Certificates: {
        required: true,
        serializedName: "x5c",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "ByteArray"
            }
          }
        }
      },
      certificateAttributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "CertificateAttributes"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CertificateIssuerSetParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateIssuerSetParameters",
  type: {
    name: "Composite",
    className: "CertificateIssuerSetParameters",
    modelProperties: {
      provider: {
        required: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "IssuerCredentials"
        }
      },
      organizationDetails: {
        serializedName: "org_details",
        type: {
          name: "Composite",
          className: "OrganizationDetails"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "IssuerAttributes"
        }
      }
    }
  }
};

export const CertificateIssuerUpdateParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateIssuerUpdateParameters",
  type: {
    name: "Composite",
    className: "CertificateIssuerUpdateParameters",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      credentials: {
        serializedName: "credentials",
        type: {
          name: "Composite",
          className: "IssuerCredentials"
        }
      },
      organizationDetails: {
        serializedName: "org_details",
        type: {
          name: "Composite",
          className: "OrganizationDetails"
        }
      },
      attributes: {
        serializedName: "attributes",
        type: {
          name: "Composite",
          className: "IssuerAttributes"
        }
      }
    }
  }
};

export const CertificateOperationUpdateParameter: coreHttp.CompositeMapper = {
  serializedName: "CertificateOperationUpdateParameter",
  type: {
    name: "Composite",
    className: "CertificateOperationUpdateParameter",
    modelProperties: {
      cancellationRequested: {
        required: true,
        serializedName: "cancellation_requested",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const CertificateListResult: coreHttp.CompositeMapper = {
  serializedName: "CertificateListResult",
  type: {
    name: "Composite",
    className: "CertificateListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CertificateItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedCertificateListResult: coreHttp.CompositeMapper = {
  serializedName: "DeletedCertificateListResult",
  type: {
    name: "Composite",
    className: "DeletedCertificateListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeletedCertificateItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CertificateIssuerListResult: coreHttp.CompositeMapper = {
  serializedName: "CertificateIssuerListResult",
  type: {
    name: "Composite",
    className: "CertificateIssuerListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CertificateIssuerItem"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PendingCertificateSigningRequestResult: coreHttp.CompositeMapper = {
  serializedName: "PendingCertificateSigningRequestResult",
  type: {
    name: "Composite",
    className: "PendingCertificateSigningRequestResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CertificateRestoreParameters: coreHttp.CompositeMapper = {
  serializedName: "CertificateRestoreParameters",
  type: {
    name: "Composite",
    className: "CertificateRestoreParameters",
    modelProperties: {
      certificateBundleBackup: {
        required: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const BackupCertificateResult: coreHttp.CompositeMapper = {
  serializedName: "BackupCertificateResult",
  type: {
    name: "Composite",
    className: "BackupCertificateResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Base64Url"
        }
      }
    }
  }
};

export const KeyVaultError: coreHttp.CompositeMapper = {
  serializedName: "KeyVaultError",
  type: {
    name: "Composite",
    className: "KeyVaultError",
    modelProperties: {
      error: {
        readOnly: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorModel"
        }
      }
    }
  }
};
