class FeatureSwitcher {
  constructor(element) {
    this.element = element;
    this.featureItems = element.querySelectorAll(".featureItem");
    this.featureItems.forEach(item => new FeatureItem(item));
    this.featureItems.forEach(item =>
      item.addEventListener("click", this.select.bind(this, item))
    );
  }

  select(item) {
    this.element
      .querySelectorAll(".active")
      .forEach(item => item.classList.remove("active"));
    item = new FeatureItem(item);
    item.select();
    this.selectedItem = item;
  }
}

class FeatureItem {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.feature;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.featureImage[data-feature="${this.data}"]`
    );

    // Using the Item element, create a new instance of the FeatureImage class
    this.featureImage = new FeatureImage(this.itemElement);
  }

  select() {
    this.element.classList.add("active");
    // Call the select method on the item associated with this link
    this.featureImage.select();
  }
}

class FeatureImage {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("active");
  }
}

const featured = new FeatureSwitcher(document.querySelector(".featureDiv"));
