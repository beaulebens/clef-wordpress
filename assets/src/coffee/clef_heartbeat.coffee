jQuery(document).ready ->
    wp.heartbeat.interval "fast"
    wp.heartbeat.enqueue "clef", "cleflogout", true

    jQuery(document).on "heartbeat-tick", (e, data) ->
        wp.heartbeat.enqueue "clef", "cleflogout", true

