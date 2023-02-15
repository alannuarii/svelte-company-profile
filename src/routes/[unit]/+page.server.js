export const load = async ({ params }) => {
	const unit = params.unit;
	const res = await fetch(`https://pltdktm.anpy.my.id/unit/${unit}`);
	const data = res.json();
	return {
		data
	};
};
