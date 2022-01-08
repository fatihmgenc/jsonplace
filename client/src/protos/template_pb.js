// source: template.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.template.PropType', null, global);
goog.exportSymbol('proto.template.SaveTemplateResponse', null, global);
goog.exportSymbol('proto.template.SavedTemplateProtoDto', null, global);
goog.exportSymbol('proto.template.TemplateProtoDto', null, global);
goog.exportSymbol('proto.template.TemplateProtoDtoList', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.template.TemplateProtoDtoList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.template.TemplateProtoDtoList.repeatedFields_, null);
};
goog.inherits(proto.template.TemplateProtoDtoList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.template.TemplateProtoDtoList.displayName = 'proto.template.TemplateProtoDtoList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.template.SavedTemplateProtoDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.template.SavedTemplateProtoDto.repeatedFields_, null);
};
goog.inherits(proto.template.SavedTemplateProtoDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.template.SavedTemplateProtoDto.displayName = 'proto.template.SavedTemplateProtoDto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.template.TemplateProtoDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.template.TemplateProtoDto.repeatedFields_, null);
};
goog.inherits(proto.template.TemplateProtoDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.template.TemplateProtoDto.displayName = 'proto.template.TemplateProtoDto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.template.PropType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.template.PropType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.template.PropType.displayName = 'proto.template.PropType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.template.SaveTemplateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.template.SaveTemplateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.template.SaveTemplateResponse.displayName = 'proto.template.SaveTemplateResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.template.TemplateProtoDtoList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.template.TemplateProtoDtoList.prototype.toObject = function(opt_includeInstance) {
  return proto.template.TemplateProtoDtoList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.template.TemplateProtoDtoList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.TemplateProtoDtoList.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtolistList: jspb.Message.toObjectList(msg.getDtolistList(),
    proto.template.SavedTemplateProtoDto.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.template.TemplateProtoDtoList}
 */
proto.template.TemplateProtoDtoList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.template.TemplateProtoDtoList;
  return proto.template.TemplateProtoDtoList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template.TemplateProtoDtoList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template.TemplateProtoDtoList}
 */
proto.template.TemplateProtoDtoList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.template.SavedTemplateProtoDto;
      reader.readMessage(value,proto.template.SavedTemplateProtoDto.deserializeBinaryFromReader);
      msg.addDtolist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.template.TemplateProtoDtoList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.template.TemplateProtoDtoList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template.TemplateProtoDtoList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.TemplateProtoDtoList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.template.SavedTemplateProtoDto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SavedTemplateProtoDto DtoList = 1;
 * @return {!Array<!proto.template.SavedTemplateProtoDto>}
 */
proto.template.TemplateProtoDtoList.prototype.getDtolistList = function() {
  return /** @type{!Array<!proto.template.SavedTemplateProtoDto>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.template.SavedTemplateProtoDto, 1));
};


/**
 * @param {!Array<!proto.template.SavedTemplateProtoDto>} value
 * @return {!proto.template.TemplateProtoDtoList} returns this
*/
proto.template.TemplateProtoDtoList.prototype.setDtolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.template.SavedTemplateProtoDto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.template.SavedTemplateProtoDto}
 */
proto.template.TemplateProtoDtoList.prototype.addDtolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.template.SavedTemplateProtoDto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.template.TemplateProtoDtoList} returns this
 */
proto.template.TemplateProtoDtoList.prototype.clearDtolistList = function() {
  return this.setDtolistList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.template.SavedTemplateProtoDto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.template.SavedTemplateProtoDto.prototype.toObject = function(opt_includeInstance) {
  return proto.template.SavedTemplateProtoDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.template.SavedTemplateProtoDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.SavedTemplateProtoDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    proptypesList: jspb.Message.toObjectList(msg.getProptypesList(),
    proto.template.PropType.toObject, includeInstance),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.template.SavedTemplateProtoDto}
 */
proto.template.SavedTemplateProtoDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.template.SavedTemplateProtoDto;
  return proto.template.SavedTemplateProtoDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template.SavedTemplateProtoDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template.SavedTemplateProtoDto}
 */
proto.template.SavedTemplateProtoDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.template.PropType;
      reader.readMessage(value,proto.template.PropType.deserializeBinaryFromReader);
      msg.addProptypes(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.template.SavedTemplateProtoDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.template.SavedTemplateProtoDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template.SavedTemplateProtoDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.SavedTemplateProtoDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProptypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.template.PropType.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated PropType PropTypes = 1;
 * @return {!Array<!proto.template.PropType>}
 */
proto.template.SavedTemplateProtoDto.prototype.getProptypesList = function() {
  return /** @type{!Array<!proto.template.PropType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.template.PropType, 1));
};


/**
 * @param {!Array<!proto.template.PropType>} value
 * @return {!proto.template.SavedTemplateProtoDto} returns this
*/
proto.template.SavedTemplateProtoDto.prototype.setProptypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.template.PropType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.template.PropType}
 */
proto.template.SavedTemplateProtoDto.prototype.addProptypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.template.PropType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.template.SavedTemplateProtoDto} returns this
 */
proto.template.SavedTemplateProtoDto.prototype.clearProptypesList = function() {
  return this.setProptypesList([]);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.template.SavedTemplateProtoDto.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.template.SavedTemplateProtoDto} returns this
 */
proto.template.SavedTemplateProtoDto.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.template.TemplateProtoDto.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.template.TemplateProtoDto.prototype.toObject = function(opt_includeInstance) {
  return proto.template.TemplateProtoDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.template.TemplateProtoDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.TemplateProtoDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    proptypesList: jspb.Message.toObjectList(msg.getProptypesList(),
    proto.template.PropType.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.template.TemplateProtoDto}
 */
proto.template.TemplateProtoDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.template.TemplateProtoDto;
  return proto.template.TemplateProtoDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template.TemplateProtoDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template.TemplateProtoDto}
 */
proto.template.TemplateProtoDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.template.PropType;
      reader.readMessage(value,proto.template.PropType.deserializeBinaryFromReader);
      msg.addProptypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.template.TemplateProtoDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.template.TemplateProtoDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template.TemplateProtoDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.TemplateProtoDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProptypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.template.PropType.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PropType PropTypes = 1;
 * @return {!Array<!proto.template.PropType>}
 */
proto.template.TemplateProtoDto.prototype.getProptypesList = function() {
  return /** @type{!Array<!proto.template.PropType>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.template.PropType, 1));
};


/**
 * @param {!Array<!proto.template.PropType>} value
 * @return {!proto.template.TemplateProtoDto} returns this
*/
proto.template.TemplateProtoDto.prototype.setProptypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.template.PropType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.template.PropType}
 */
proto.template.TemplateProtoDto.prototype.addProptypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.template.PropType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.template.TemplateProtoDto} returns this
 */
proto.template.TemplateProtoDto.prototype.clearProptypesList = function() {
  return this.setProptypesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.template.PropType.prototype.toObject = function(opt_includeInstance) {
  return proto.template.PropType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.template.PropType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.PropType.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeselectionname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parenttypeselectionname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    propname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.template.PropType}
 */
proto.template.PropType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.template.PropType;
  return proto.template.PropType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template.PropType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template.PropType}
 */
proto.template.PropType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeselectionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParenttypeselectionname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.template.PropType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.template.PropType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template.PropType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.PropType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeselectionname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParenttypeselectionname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPropname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string TypeSelectionName = 1;
 * @return {string}
 */
proto.template.PropType.prototype.getTypeselectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.template.PropType} returns this
 */
proto.template.PropType.prototype.setTypeselectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ParentTypeSelectionName = 2;
 * @return {string}
 */
proto.template.PropType.prototype.getParenttypeselectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.template.PropType} returns this
 */
proto.template.PropType.prototype.setParenttypeselectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string PropName = 3;
 * @return {string}
 */
proto.template.PropType.prototype.getPropname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.template.PropType} returns this
 */
proto.template.PropType.prototype.setPropname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.template.SaveTemplateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.template.SaveTemplateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.template.SaveTemplateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.SaveTemplateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.template.SaveTemplateResponse}
 */
proto.template.SaveTemplateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.template.SaveTemplateResponse;
  return proto.template.SaveTemplateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.template.SaveTemplateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.template.SaveTemplateResponse}
 */
proto.template.SaveTemplateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.template.SaveTemplateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.template.SaveTemplateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.template.SaveTemplateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.template.SaveTemplateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool Result = 1;
 * @return {boolean}
 */
proto.template.SaveTemplateResponse.prototype.getResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.template.SaveTemplateResponse} returns this
 */
proto.template.SaveTemplateResponse.prototype.setResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.template);
