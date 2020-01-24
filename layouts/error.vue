<template>
	<div class="page-header header-filter">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-6 ml-auto mr-auto">
					<div class="card card-pricing card-raised bg-primary">
						<div class="card-body">
							<h6 class="card-category">Error</h6>
							<h1 class="card-title">
								404
							</h1>
							<ul>
								<li>
									<b>Page is not found</b>
								</li>
							</ul>
							<nuxt-link to="/"><button class="btn btn-white btn-round">Home</button></nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: ["error"],
  layout: "blog" // you can set a custom layout for the error page
};
</script>