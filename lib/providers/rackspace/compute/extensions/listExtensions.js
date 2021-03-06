var pkgcloud = require('pkgcloud'),
  logging = require('../../../../common/logging'),
  config = require('../../../../common/config'),
  _ = require('underscore');

var log = logging.getLogger(process.env.PKGCLOUD_LOG_LEVEL || 'debug');

var client = pkgcloud.providers.rackspace.compute.createClient(config.getConfig('rackspace'));

client.on('log::*', logging.logFunction);

client.getExtensions(function(err, extensions) {
  extensions.forEach(function(extension) {
    log.info(extension.alias);
  });
});