<?php
/**
 * Contains the post embed header template
 *
 * When a post is embedded in an iframe, this file is used to create the header output
 * if the active theme does not include a header-embed.php template.
 *
 * @package WordPress
 * @subpackage Theme_Compat
 * @since 4.5.0
 */

if ( ! headers_sent() ) {
	header( 'X-WP-embed: true' );
}

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<title><?php echo wp_get_document_title(); ?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<?php
	/**
	 * Prints scripts or data in the embed template <head> tag.
	 *
	 * @since 4.4.0
	 */
	do_action( 'embed_head' );
	?>
<!-- www.yongneng.net.cn/wordpress Baidu tongji analytics -->
<script>
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?e0508b4db7465773164cfef7b98071cd";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();
</script>
</head>
<body <?php body_class(); ?>>
