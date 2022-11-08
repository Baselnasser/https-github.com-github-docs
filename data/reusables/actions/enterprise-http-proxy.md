If you have an **HTTP Proxy Server** configured on {% data variables.location.product_location %}:

  - You must add `localhost` and `127.0.0.1` to the **HTTP Proxy Exclusion** list.
  - If your external storage location is not routable, then you must also add your external storage URL to the exclusion list.

  For more information on changing your proxy settings, see "[Configuring an outbound web proxy server](/admin/configuration/configuring-an-outbound-web-proxy-server)."
