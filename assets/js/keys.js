/*! Clef for WordPress - v1.9
 * http://getclef.com
 * Copyright (c) 2014; * Licensed GPLv2+ */
(function(e){function t(t){if(/https:\/\/clef.io/.test(t.origin)){var a=t.data.appID,n=t.data.appSecret,c=t.data.oauthCode,o=jQuery('input[name="wpclef[clef_settings_app_id]"]');o.val(a),e('input[name="wpclef[clef_settings_app_secret]"]').val(n),e('input[name="wpclef[clef_settings_oauth_code]"]').val(c),e(".wrap iframe").hide(),e("form#wp_clef input[type=submit]").trigger("click")}}e(document).ready(function(){window.addEventListener("message",t),setTimeout(function(){e(".logout-hook-error").slideDown()},2e4)})}).call(this,jQuery);