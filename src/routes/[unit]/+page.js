export const load = ({ fetch, params }) => {
	const fetchData = async (unit) => {
		const res = await fetch(`https://pltdktm.anpy.my.id/${unit}`);
		const result = await res.json();
		return result;
	};

	return {
		data: fetchData(params.unit)
	};
};
