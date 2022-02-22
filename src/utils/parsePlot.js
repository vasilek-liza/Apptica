import { SubCategories } from "../store/reducers/Categories/SubCategories";

export function parsePlot({ plot, categories}) {
    const data = { datasets: [], labels: [] };

    for (let rank in plot) {
        for (let sub in plot[rank]) {
            const values = plot[rank][sub];

            if (!data.labels.length) {
                data.labels = Object.keys(values);
            }

            const predicament = categories.find((category) => {
                if (category.id == rank) {
                    return rank;
                }
                
                for (let subCategories of category.categories) {
                    if (subCategories.id == rank) {
                        return subCategories;
                    }
                }
            })
            data.datasets.push({
                data: Object.keys(values).map((key) => values[key] || 0),
                label: predicament.name + " - " + SubCategories[sub],
                borderColor: "#" + (Math.random().toString(16) + "000000")
                                        .substring(2, 8).toUpperCase(),
                fill: true,
                lineTension: 0.5,
            });
        }
    }

    return data;
}